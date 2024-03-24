import RSS from 'rss';
import { getArticle } from '@/lib/action';

const MAX_POSTS = 100;

export async function GET() {
  const articles = await getArticle();

  const feed = new RSS({
    title: `Latest Global News: Real-Time Events and Analysis from Around the World`,
    description:
      'Stay informed with up-to-the-minute coverage of breaking news, in-depth analysis, and insightful commentary on major global events across politics, technology, economy, and culture. Your comprehensive source for worldwide news.',
    site_url: process.env.BASE_URL,
    feed_url: `${process.env.BASE_URL}/feed.xml`,
    copyright: `${new Date().getFullYear()} GLOBAL NEWS`,
    language: 'en',
    pubDate: new Date().toUTCString(),
  });

  articles
    .reverse()
    .slice(0, MAX_POSTS)
    .map((article) => {
      feed.item({
        title: article.title,
        guid: `${process.env.BASE_URL}/news/${article.slug}`,
        url: `${process.env.BASE_URL}/news/${article.slug}`,
        date: article.time,
        description: article.description,
        author: 'News Around Wolrd',
        categories: [`${article.category}`],
        enclosure: {
          url: `${process.env.URL_AWS}${article.image}`,
          type: 'image/*, length="51200',
        },
      });
    });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
