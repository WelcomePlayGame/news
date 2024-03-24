import { getArticleBySlug as get } from '@/lib/action';
import NavPage from '@/components/header/nav-page';
import HeaderPage from '@/components/header/header-page';
import NavNavigation from '@/components/header/nav-navigation-page';
import Image from 'next/image';
import PageAside from '@/components/page-aside/page-aside';
import classes from '@/components/page_id/page-id.module.css';
import Footer from '@/components/footer/page-footer';
import Breadcrumbs from '@/components/breadcrumbs/page-breadcrumbs';
import Comments from '@/components/comments/page-comment';
export const generateMetadata = async ({ params }: any) => {
  const article = await get(params.slug);
  return {
    title: article.title,
    description: article.description,
  };
};
const PageId = async ({ params }: any) => {
  const article = await get(params.slug);

  return (
    <main>
      <NavPage />
      <HeaderPage />
      <NavNavigation />

      <div
        className={`${classes.page_id_new_container} flex flex-col items-center lg:items-baseline lg:flex-row lg:justify-center font-Montserrat`}
      >
        <div className={`flex flex-col w-[300px]  mt-[70px] md:w-[700px]`}>
          <div>
            {/* <Breadcrumbs
              crumbs={[
                {
                  label: 'home >',
                  url: '/',
                },
                {
                  label: 'news >',
                  url: '/news',
                },
                { label: `${article.title}`, url: `${article.slug}` },
              ]}
              breadcrump_class={``}
            /> */}
          </div>
          <div
            className={`${classes.image_container} relative object-contain w-[300px] h-[150px] block mx-auto md:w-[600px] md:h-[300px] `}
          >
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
              className={`${classes.description_container} mt-[15px] text-[20px] uppercase mb-[20px] text-center`}
            >
              {article.title}
            </h2>
          </div>
          <div
            className={`${classes.description_container} flex justify-center border-t-[1px] border-b-[3px] border-[#333] mb-[20px] text-[18px]`}
          >
            <span className={`${classes.timeandcategory_container}`}>
              {article.time}
            </span>
            <span className={`pl-[20px] uppercase`}>{article.category}</span>
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: article.description }}
              className={`${classes.description_container} left text-[16px] break-words`}
            />
          </div>
          <Comments />
        </div>
        <div className={`${classes.aside_container} ml-[15px]`}>
          <PageAside />
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default PageId;
