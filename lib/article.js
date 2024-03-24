'use server';
import slugify from 'slugify';
import xss from 'xss';
import { connectDB, getCollection, closeConnection } from '@/db';
import { ObjectId } from 'mongodb';
import { S3 } from '@aws-sdk/client-s3';
import sendMessage from '@/components/telegram/page-telegram';
const s3 = new S3({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
export const saveArticle = async ({ articleData }) => {
  await connectDB();
  try {
    articleData.slug = slugify(articleData.title, { lower: true }).replace(
      /[:.?!"+\s]+/g,
      ''
    );

    articleData.description = xss(articleData.description);
    const extension = articleData.image.name.split('.').pop();
    const fileName = `${articleData.slug}.${extension}`;

    const bufferImage = await articleData.image.arrayBuffer();
    await s3.putObject({
      Bucket: 'next-file-news-ua',
      Key: fileName,
      Body: Buffer.from(bufferImage),
      ContentType: articleData.image.type,
    });

    articleData.image = fileName;
    await sendMessage({ articleData });
    // await PostSendFacebook(articles);
    const articles = getCollection('articles');
    await articles.insertOne(articleData);
    console.log('Статья успешно сохранена');
  } catch (err) {
    console.error('Ошибка при сохранении статьи:', err);
  }
  await closeConnection();
};

export const getArticles = async () => {
  await connectDB();

  try {
    const articlesCollection = await getCollection('articles');
    const result = await articlesCollection.find().toArray();

    console.log('Найденные статьи:', result);
    return result;
  } catch (err) {
    console.log(`Ошибка при запросе статей`, err);
    return [];
  }
};
// method get Article by id
export const getArticleById = async (slug) => {
  await connectDB(); // Устанавливаем соединение с базой данных
  try {
    const articles = getCollection('articles'); // Получаем коллекцию
    const articleMongo = await articles.findOneAndUpdate(
      { slug: slug }, // Условие для поиска
      { $inc: { pageviews: 1 } }, // Инкрементируем pageviews на 1
      { returnNewDocument: true } // Указываем, что нужно возвращать обновленный документ
    );
    console.log('Документ Mongo ', articleMongo);
    // Подготавливаем результат для возврата, преобразуя _id и добавляя время
    const result = {
      ...articleMongo, // Обязательно используйте .value, чтобы получить документ
      time: articleMongo._id.getTimestamp().toLocaleDateString('ru-RU'),
      _id: articleMongo._id.toString(),
    };
    return result;
  } catch (err) {
    console.log('Ошибка при запросе к статье', err);
  }
  await closeConnection(); // Закрываем соединение с базой данных
};

export const getAllTag = async () => {
  await connectDB();
  try {
    const articles = getCollection('articles');
    const tagArray = await articles.find({}, { tag: 1 }).toArray();
    return tagArray;
  } catch (error) {
    return [];
  }
  await closeConnection();
};
export const deleteArticle = async (_id, slug) => {
  await connectDB();
  try {
    const articles = getCollection('articles');
    const objectId = new ObjectId(_id);
    const result = await articles.deleteOne({ _id: objectId });

    if (result.deletedCount === 1) {
      console.log('Документ успешно удален');
      await deleteFileFromS3(slug);
    } else {
      console.log('Документ не был найден');
    }
  } catch (error) {
    console.log(error);
  }
  await closeConnection();
};

const deleteFileFromS3 = async (slug) => {
  try {
    const params = {
      Bucket: 'next-file-news-ua',
      Key: slug,
    };
    await s3.deleteObject(params);
    console.log(`Файл ${slug} успешно удален из бакета.`);
  } catch (error) {
    console.error(`Произошла ошибка при удалении файла ${slug}:`, error);
  }
};
