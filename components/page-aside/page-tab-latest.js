import PageLatestGrid from '@/components/page-aside/page-tab-article-latest-grid';
import { getArticle as get } from '@/lib/action';
const PageTabLatest = () => {
  const ArticleGet = async () => {
    const articles = await get();
    return <PageLatestGrid articles={articles} />;
  };
  return (
    <main>
      <ArticleGet />
    </main>
  );
};
export default PageTabLatest;
