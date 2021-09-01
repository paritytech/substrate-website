import AOS from 'aos';
import cx from 'classnames';
import React, { useEffect } from 'react';

import Footer from '../site/Footer';
import Header from '../site/Header';

function LayoutSidebar({ children }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:h-auto lg:bg-substrateGray-light lg:dark:bg-gray-900">
        <div className={cx('sticky top-16 h-docNav overflow-y-auto w-60')}>
          <nav className={cx('pl-4 pt-10 pb-5')}>Nav</nav>
        </div>
      </div>
      <article className="max-w-6xl px-4 lg:px-16 lg:pb-24 lg:flex lg:mx-auto">
        <div className="pt-10 ">{children}</div>
        <div className="hidden xl:inline-block xl:flex-none">
          <nav className="w-60 sticky top-16 h-screen py-5 pl-12 text-sm overflow-y-auto">
            <div>Article nav</div>
          </nav>
        </div>
      </article>
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
      <Header mode={mode} />
      <main className="min-h-screen mt-12">
        {layout === 'default' && <>{children}</>}
        {layout === 'sidebar' && <LayoutSidebar>{children}</LayoutSidebar>}
      </main>
      <Footer />
    </>
  );
}
