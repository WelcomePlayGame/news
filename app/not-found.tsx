import Link from 'next/link';
import classes from './page-404.module.css';

const Page404 = () => {
  return (
    <main className={`${classes.page_404} w-[500px] h-[500px] block mx-auto`}>
      <div>
        <ul className={`flex justify-between mt-[150px] border-b-[2px]`}>
          <li>
            <Link href={'/news'} className={`uppercase`}>
              our news
            </Link>
          </li>
          <li>
            <Link href={'/about'} className={`uppercase`}>
              about us
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Page404;
