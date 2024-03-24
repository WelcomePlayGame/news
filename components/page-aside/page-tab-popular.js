import Link from 'next/link';
const PageTabPopular = ({ articles }) => {
  articles.sort((a, b) => b.pageviews - a.pageviews);

  return (
    <main className={`w-[300px]`}>
      {articles.slice(0, 10).map((article, index) => (
        <div key={index} className={`mb-[10px] mt-[10px] border-b-[1px]`}>
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </div>
      ))}
    </main>
  );
};
export default PageTabPopular;
