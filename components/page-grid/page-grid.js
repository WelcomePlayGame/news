import classes from './page-grid.module.css';
import ItemPage from './page-item';
import PageAside from '@/components/page-aside/page-aside';

const PageGrid = ({ articles }) => {
  return (
    <main className={`flex flex-col md:flex-row md:justify-evenly md:w-1/2`}>
      <div>
        {articles?.slice(0, 10).map((article) => (
          <div key={article._id} className={`${classes.news_container}`}>
            <ItemPage {...article} />
          </div>
        ))}
      </div>
      <aside className={`${classes.aside_right}`}>
        <PageAside />
      </aside>
    </main>
  );
};
export default PageGrid;
