import classes from './nav-page.module.css';
import Link from 'next/link';

const NavPage = () => {
  return (
    <main className="bg-gray-800">
      <nav className={`${classes.nav_container} w-1/2 h-10 block mx-auto`}>
        <ul
          className={`${classes.ul_container} flex justify-start items-center list-none`}
        >
          <li
            className={`${classes.li_container} flex items-center mr-5 text-white`}
          >
            <Link href={'/'}>Home</Link>
          </li>
          <li
            className={`${classes.li_container} flex items-center mr-5 text-white`}
          >
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};
export default NavPage;
