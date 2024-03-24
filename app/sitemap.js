import { getArticle as get } from '../lib/action';

export default async function sitemap() {
  // Сделать функцию асинхронной
  const articles = await get();
  const mappedArticles = articles.map((article) => ({
    url: `${process.env.BASE_URL}/news/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }));

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...mappedArticles,
  ];
}
