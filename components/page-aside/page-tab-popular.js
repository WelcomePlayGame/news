import Link from 'next/link';
const PageTabPopular = ({ articles }) => {
  articles.sort((a, b) => b.pageviews - a.pageviews);

  return (
    <main>
      {articles.slice(0, 20).map((article, index) => (
        <div key={index}>
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </div>
      ))}
    </main>
  );
};
export default PageTabPopular;
