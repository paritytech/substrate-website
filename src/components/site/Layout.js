import AOS from 'aos';
import cx from 'classnames';
import React, { useEffect } from 'react';

import Footer from '../site/Footer';
import Header from '../site/Header';
import NavBreadcrumb from '../site/NavBreadcrumb';
import NavSidebar from '../site/NavSidebar';
import ArticleNav from './ArticleNav';

function LayoutSidebar({ articleNav, children }) {
  return (
    <div className="flex">
      <div className="hidden lg:block min-h-screen lg:h-auto lg:bg-substrateGray-light border-r lg:dark:bg-substrateBlackish dark:border-substrateDarkThemeGrey">
        <div className={cx(`sticky top-16 overflow-y-auto w-64`)}>
          <NavSidebar />
        </div>
      </div>
      <div className="w-full 2xl:pr-64 pt-10">
        <div className="flex m-auto lg:max-w-6xl">
          <div>
            <div className="container hidden md:block lg:px-10 lg:max-w-6xl m-auto mb-10 underline-animate underline-animate-thin">
              <NavBreadcrumb />
            </div>
            <article className="lg:max-w-6xl m-auto">{children}</article>
          </div>
          {articleNav && (
            <div className="hidden xl:block min-h-screen">
              <div className="sticky top-16 overflow-y-auto w-64">
                <ArticleNav />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Layout({ layout = 'default', mode = 'default', children }) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 600,
    });
  }, []);

  return (
    <>
      <Header mode={mode} />
      <main
        className={cx('min-h-screen', {
          'mt-12': layout === 'default',
        })}
      >
        {layout === 'default' && <>{children}</>}
        {layout === 'sidebar' && <LayoutSidebar>{children}</LayoutSidebar>}
        {layout === 'sidebar article-nav' && <LayoutSidebar articleNav={true}>{children}</LayoutSidebar>}
      </main>
      <Footer />
    </>
  );
}
