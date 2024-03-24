import classes from './header.module.css';
const HeaderPage = () => {
  return (
    <header className={`w-1/2 h-10 block mx-auto pt-10`}>
      <div>
        <h1 className={`${classes.branding} text-[1rem]  md:text-[3rem]`}>
          Global News
        </h1>
        <div
          className={`${classes.sub_branding} text-[12px] mt-[13px] tracking-tighter md:tracking-widest md:text-[0.8rem] lg:text-[1.2rem] `}
        >
          Real-Time Events and Analysis from Around the World
        </div>
      </div>
    </header>
  );
};
export default HeaderPage;
