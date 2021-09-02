import AOS from 'aos';
import cx from 'classnames';
import React, { useEffect } from 'react';

import { ThemeProvider } from '../../contexts/ThemeContext';
import Footer from '../site/Footer';
import Header from '../site/Header';

function LayoutSidebar({ children }) {
  return (
    <div className="flex">
      <div className="hidden lg:block lg:bg-substrateGray-light border-r lg:dark:bg-gray-900">
        <div className={cx('sticky top-16 overflow-y-auto lg:h-screen w-60')}>
          <nav className={cx('pl-4 pt-10 pb-5')}>Nav</nav>
        </div>
      </div>
      <div className="w-full 2xl:pr-60">
        <article className="lg:max-w-6xl m-auto">
          <div className="pt-10">{children}</div>
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
      once: true,
    });
  }, []);

  return (
    <>
      <ThemeProvider>
        <Header mode={mode} />
        <main
          className={cx('min-h-screen', {
            'mt-12': layout === 'default',
          })}
        >
          {layout === 'default' && <>{children}</>}
          {layout === 'sidebar' && <LayoutSidebar>{children}</LayoutSidebar>}
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
