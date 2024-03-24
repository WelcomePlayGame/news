import classes from './nav-navigation-page.module.css';
import Link from 'next/link';
const NavNavigation = () => {
  return (
    <nav
      className={`${classes.nav_navigation_container} h-13 w-1/2 block mx-auto `}
    >
      <ul
        className={` ${classes.ul_container_nav} flex justify-start items-center list-none`}
      >
        <li className={`${classes.li_container_nav}`}>
          <Link
            href={'/'}
            className={`${classes.a_container_nav} text-[14px] p-[5px] md:text-[0.8rem] md:p-[15px] lg:text-[1.2rem]`}
          >
            Home
          </Link>
        </li>
        <li className={`${classes.li_container_nav}`}>
          <Link
            href={`/news`}
            className={`${classes.a_container_nav} text-[14px] p-[5px] md:text-[0.8rem] md:p-[15px] lg:text-[1.2rem]`}
          >
            News
          </Link>
        </li>
        <li className={`${classes.li_container_nav}`}>
          <Link
            href={`/blog`}
            className={`${classes.a_container_nav} text-[14px] p-[5px] md:text-[0.8rem] md:p-[15px] lg:text-[1.2rem]`}
          >
            Blog
          </Link>
        </li>
        <li className={`${classes.li_container_nav}`}>
          <Link
            href={`/about`}
            className={`${classes.a_container_nav} text-[14px] p-[5px] md:text-[0.8rem] md:p-[15px] lg:text-[1.2rem]`}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavNavigation;
