import { getArticle as get } from '@/lib/action';
import NewsGrid from '@/components/news/page-news-grid';
const ArticleFetch = async () => {
  const articles = await get();
  return <NewsGrid articles={articles} />;
};
const NewsPage = () => {
  return (
    <main>
      <ArticleFetch />
    </main>
  );
};
export default NewsPage;
