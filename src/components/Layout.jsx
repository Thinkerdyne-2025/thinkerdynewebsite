import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { seoByPath, defaultSeo } from '../constants/seo';
import { updatePageMeta } from '../utils/updatePageMeta';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoByPath[pathname] || defaultSeo;
    updatePageMeta(seo, pathname);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
