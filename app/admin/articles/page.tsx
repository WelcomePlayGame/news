import { getArticle as get } from '@/lib/action';
import PageListGrid from '@/components/article-list/list-article-page';
const PageList = () => {
  const ArticleFetch = async () => {
    const articles = await get();
    return <PageListGrid articles={articles} />;
  };
  return (
    <main>
      <ArticleFetch />
    </main>
  );
};
export default PageList;
