import cx from 'classnames';
import React, { useState } from 'react';

import Icon from '../default/Icon';
import Footer from '../site/Footer';
import Header from '../site/Header';

function LayoutSidebar({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:inline-block lg:flex-none lg:h-auto lg:bg-substrateGray-light lg:dark:bg-gray-900 ">
        <nav
          className={cx('sticky top-16 h-docNav overflow-y-auto', {
            'transition-width transform w-16': isSidebarOpen,
            'transition-width transform w-60': !isSidebarOpen,
          })}
        >
          <div className="flex flex-row justify-end pl-4 pt-10 pb-5">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-black dark:bg-white p-3 mr-4 rounded-lg opacity-90 hover:opacity-100 focus:outline-none"
            >
              <div
                className={cx('transition transform duration-300 fill-current text-white', {
                  'rotate-180': isSidebarOpen,
                  'rotate-0': !isSidebarOpen,
                })}
              >
                <Icon name="sidebar-toggle" />
              </div>
            </button>
          </div>
          <div
            className={cx('pl-4 py-4 transition-all transform ease-in-out', {
              'duration-75 opacity-0': isSidebarOpen,
              'duration-500 opacity-100': !isSidebarOpen,
            })}
          >
            Nav
          </div>
        </nav>
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
  return (
    <>
      <Header mode={mode} />
      <main className="min-h-screen">
        {layout === 'default' && <>{children}</>}
        {layout === 'sidebar' && <LayoutSidebar>{children}</LayoutSidebar>}
      </main>
      <Footer />
    </>
  );
}
