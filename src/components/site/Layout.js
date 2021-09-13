import AOS from 'aos';
import cx from 'classnames';
import React, { useEffect } from 'react';

import Footer from '../site/Footer';
import Header from '../site/Header';

function LayoutSidebar({ articleNav, children }) {
  return (
    <div className="flex">
      <div className="hidden lg:block lg:bg-substrateGray-light border-r lg:dark:bg-substrateBlackish dark:border-substrateDarkThemeGrey">
        <div className={cx('sticky top-16 overflow-y-auto lg:h-screen w-60')}>
          <nav className={cx('pl-4 pt-10 pb-5')}>Nav</nav>
        </div>
      </div>
      <div className="w-full 2xl:pr-60">
        <article className="lg:max-w-6xl m-auto">
          <div className="pt-10">{children}</div>
          {articleNav && (
            <nav className="hidden xl:block fixed right-0 top-36 max-w-xs" id="article-nav">
              <p className="uppercase font-bold">Contents</p>
            </nav>
          )}
        </article>
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
