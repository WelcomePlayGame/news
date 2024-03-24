'use server';
import { saveArticle as save } from './article';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getArticles as get } from './article';
import { getArticleById } from './article';
import { getAllTag } from './article';
// method save for Article
export const saveArticle = async (formData) => {
  const articleData = {
    title: formData.get('title'),
    seo_title: formData.get('seo_title'),
    description: formData.get('htmlContent'),
    seo_description: formData.get('seo_description'),
    tag: formData.get('tag'),
    category: formData.get('category'),
    image: formData.get('image'),
  };

  await save({ articleData });

  revalidatePath('/', 'layout');
  redirect('/');
};
// method get  for all  Article
export const getArticle = async () => {
  const articles = await get();
  const articlesArray = articles.map((article) => ({
    ...article,
    _id: article._id.toString(),
    time: article._id.getTimestamp().toUTCString(),
  }));
  return articlesArray;
};
export const getArticleBySlug = async (slug) => {
  const result = await getArticleById(slug);
  return result;
};
//method get all Tag
export const getTags = async () => {
  const tags = await getAllTag();
  const tagsArray = tags.map((tag) => ({
    ...tag,
    _id: tag._id.toString(),
  }));
  return tagsArray;
};
