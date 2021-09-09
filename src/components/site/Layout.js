import AOS from 'aos';
import cx from 'classnames';
import React, { useEffect } from 'react';

import DataContext from '../../contexts/DataContext';
import Footer from '../site/Footer';
import Header from '../site/Header';
import NavBreadcrumb from '../site/NavBreadcrumb';

function LayoutSidebar({ children, pageTitle }) {
  return (
    <div className="flex">
      <div className="hidden lg:block lg:bg-substrateGray-light border-r lg:dark:bg-substrateBlackish dark:border-substrateDarkThemeGrey">
        <div className={cx('sticky top-16 overflow-y-auto lg:h-screen w-60')}>
          <nav className={cx('pl-4 pt-10 pb-5')}>Nav</nav>
        </div>
      </div>
      <div className="w-full 2xl:pr-60 pt-10">
        <NavBreadcrumb pageTitle={pageTitle} />
        <article className="lg:max-w-6xl m-auto">{children}</article>
      </div>
    </div>
  );
}

export default function Layout({ layout = 'default', mode = 'default', children, pageTitle }) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 600,
    });
  }, []);

  return (
    <DataContext.Consumer>
      {({ location }) => (
        <>
          {console.log('path: ' + location.pathname)}
          <Header mode={mode} />
          <main
            className={cx('min-h-screen', {
              'mt-12': layout === 'default',
            })}
          >
            {layout === 'default' && <>{children}</>}
            {layout === 'sidebar' && <LayoutSidebar pageTitle={pageTitle}>{children}</LayoutSidebar>}
          </main>
          <Footer />
        </>
      )}
    </DataContext.Consumer>
  );
}
