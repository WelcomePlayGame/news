import PageGrid from '@/components/page-grid/page-grid';
import NavPage from '@/components/header/nav-page';
import HeaderPage from '@/components/header/header-page';
import NavNavigation from '@/components/header/nav-navigation-page';
import { getArticle as get } from '@/lib/action';
import Footer from '@/components/footer/page-footer';
export default function Home() {
  const ArticleFetch = async () => {
    const articles = await get();
    return <PageGrid articles={articles} />;
  };
  return (
    <section>
      <NavPage />
      <HeaderPage />
      <NavNavigation />
      <main className="flex min-h-screen flex-col items-center justify-between md:p-10">
        <ArticleFetch />
      </main>
      <Footer />
    </section>
  );
}
