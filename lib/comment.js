import xss from 'xss';
import { connectDB, getCollection, closeConnection } from '@/db';
import { ObjectId } from 'mongodb';

export const commentData = async ({ comment }) => {
  await connectDB();
  try {
    const comments = await getCollection('comments');
    const users = await getCollection('users');
    const sanitizedEmail = xss(comment.email); // Применение xss к email
    const user = await users.findOne({ email: sanitizedEmail });

    if (user) {
      await comments.insertOne({
        ...comment,
        email: sanitizedEmail,
      });
    } else {
      await users.insertOne({
        name: xss(comment.name), // Применение xss к name
        email: sanitizedEmail,
      });
    }
  } catch (error) {
    console.error('Ошибка при сохранении комментария:', error);
  }
  await closeConnection();
};
