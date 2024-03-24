const PageLatestGrid = ({ articles }) => {
  return (
    <main>
      {articles.map((article) => (
        <span key={article._id}>{article.title}</span>
      ))}
    </main>
  );
};
export default PageLatestGrid;
