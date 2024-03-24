import Image from 'next/image';
import classes from './page-item.module.css';
import Link from 'next/link';
const ItemPage = ({ title, description, time, image, slug, category, tag }) => {
  return (
    <main className={``}>
      <div className={`w-[300px] md:w-[640px]`}>
        <h2
          className={`${classes.item_h1} mt-[15px] mb-[20px] md:mt-[20px]  md:text-[0.9rem] font-semibold text-center`}
        >
          {title}
        </h2>
        <div className={`flex justify-center bg-white mb-5`}>
          <span
            className={`${classes.span_des} ${classes.span_des_id} md:pl-[20px]`}
          >
            {time}
          </span>
          <span className={`${classes.span_des} md:pl-[20px] uppercase`}>
            {category}
          </span>
        </div>
        <div
          className={`${classes.item_div} rounded-[7px] w-[300px] h-[150px] md:w-[640px] md:h-[300px] md:mb-[20px]`}
        >
          <Image
            id="img_item"
            src={`${process.env.URL_AWS}${image}`}
            fill
            alt={title}
            className={`rounded-[7px]`}
          />
        </div>
        <div className={`mb-[30px] h-[50px] flex flex-col`}>
          <div className={`mb-[10px] break-words`}>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const endIndex = description.indexOf('.');
                  return endIndex >= 0
                    ? description.slice(0, endIndex + 1)
                    : description;
                })(),
              }}
            /> */}
          </div>
          <span className={`block mx-auto`}>
            <Link
              href={`/news/${slug}`}
              className={`text-[1.2rem] text-[#1fa0ae]`}
            >
              Continue Reading
            </Link>
          </span>
        </div>
        <div
          className={`${classes.item_tag_container} mt-[110px] md:mt-[30px]`}
        >
          <span className={`${classes.item_tag_span}`}>{tag}</span>
        </div>
      </div>
    </main>
  );
};
export default ItemPage;
