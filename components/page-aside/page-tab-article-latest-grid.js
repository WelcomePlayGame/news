const PageLatestGrid = ({ articles }) => {
  return (
    <main className={`w-[300px] `}>
      {articles.slice(0, 20).map((article) => (
        <div className={`mb-[10px] mt-[10px] border-b-[1px]`} key={article._id}>
          {article.title}
        </div>
      ))}
    </main>
  );
};
export default PageLatestGrid;
