import Image from 'next/image';
import Link from 'next/link';
import NavPage from '@/components/header/nav-page';
import HeaderPage from '@/components/header/header-page';
import NavNavigation from '@/components/header/nav-navigation-page';
import Footer from '../footer/page-footer';
const NewsGrid = ({ articles }) => {
  return (
    <main>
      <NavPage />
      <HeaderPage />
      <NavNavigation />
      <div
        className={`flex flex-col items-center flex-wrap lg:flex-row lg:justify-center mt-[100px]`}
      >
        {articles.reverse().map((article) => (
          <div
            key={article._id}
            className={`w-[330px] m-[10px] lg:w-[650px] lg:m-[30px]`}
          >
            <div
              className={`relative w-[350px] h-[200px] lg:w-[650px] lg:h-[300px] m-[20px]`}
            >
              <Image
                src={`${process.env.URL_AWS}${article.image}`}
                fill
                alt={article.title}
                className={`rounded-[7px]`}
              />
            </div>
            <div>
              <h3 className={`text-center mt-[20px]`}>{article.title}</h3>
            </div>
            <div
              className={`uppercase text-center mt-[20px] bg-slate-800 text-[#fff]  w-[200px] mx-auto pt-[10px] pb-[10px] rounded-[7px]`}
            >
              <Link href={`/news/${article.slug}`}>more details</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};
export default NewsGrid;
