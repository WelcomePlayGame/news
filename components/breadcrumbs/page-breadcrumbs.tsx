import Link from 'next/link';
import classes from './page-breadcrumbs.module.css';

const Breadcrumbs = ({
  crumbs,
  breadcrump_class,
}: {
  crumbs: [
    {
      label: string;
      url: string;
    }
  ];
  breadcrump_class: string;
}) => {
  return (
    <section
      className={`${classes.breadcumps} flex justify-start lg:ml-[50px] lg:mb-[20px] mb-[10px] `}
    >
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link href={crumb.url} className={`${classes.breadcrump_class}`}>
            {crumb.label}
          </Link>
          {/* {index < crumbs.length - 1 && <span> &gt; </span>} */}
        </span>
      ))}
    </section>
  );
};
export default Breadcrumbs;
