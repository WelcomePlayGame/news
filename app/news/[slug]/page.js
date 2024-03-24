import { getArticleBySlug as get } from '@/lib/action';
import NavPage from '@/components/header/nav-page';
import HeaderPage from '@/components/header/header-page';
import NavNavigation from '@/components/header/nav-navigation-page';
import Image from 'next/image';
import PageAside from '@/components/page-aside/page-aside';
import classes from '@/components/page_id/page-id.module.css';
const PageId = async ({ params }) => {
  const article = await get(params.slug);

  return (
    <main>
      <NavPage />
      <HeaderPage />
      <NavNavigation />
      <div className={`flex justify-center`}>
        <div className={`flex flex-col  mt-[70px] w-[700px]`}>
          <div className={`relative w-[600px] h-[300px] block mx-auto`}>
            {article.image && (
              <Image
                src={`${process.env.URL_AWS}${article.image}`}
                fill
                alt={article.title}
                className={`rounded-[5px]`}
              />
            )}
          </div>
          <div>
            <h2
              className={`mt-[15px] text-[25px] uppercase mb-[20px] text-center`}
            >
              {article.title}
            </h2>
          </div>
          <div
            className={`flex justify-center border-t-[1px] border-b-[3px] border-[#333] mb-[20px] text-[18px]`}
          >
            <span className={`${classes.timeandcategory_container}`}>
              {article.time}
            </span>
            <span className={`pl-[20px] uppercase`}>{article.category}</span>
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: article.description }}
              className={`left text-[16px] break-words`}
            />
          </div>
        </div>
        <div className={`ml-[15px]`}>
          <PageAside />
        </div>
      </div>
    </main>
  );
};
export default PageId;
