import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

import useScrollListener from '../../hooks/use-scroll-listener';
import Icon from '../default/Icon';
import DocsButton from './DocsButton';
import MobileNav from './MobileNav';
import NavMain from './NavMain';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const scroll = useScrollListener();
  const [menuHeight, setMenuHeight] = useState('h-24');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    console.log('now');
  };

  useEffect(() => {
    /* TODO: add into context */
    if (scroll.y > 15) {
      setMenuHeight('h-16');
    } else if (scroll.y < 1) {
      setMenuHeight('h-24');
    }
  }, [scroll.y]);

  return (
    <header className="sticky top-0 z-10 border-b bg-white dark:bg-black border-gray-200 dark:border-gray-700">
      <div className="px-4 xl:px-12">
        <div className={`flex items-center justify-between transition-height ease-in-out ${menuHeight}`}>
          <div className="w-40 relative transform transition-all duration-300 ease-in-out hover:opacity-50">
            <Link to="/">
              <Icon name="logo" />
            </Link>
          </div>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Icon name="hamburger-toggle" />
          </div>
          {isMobileNavOpen && <MobileNav toggleMenu={toggleMenu} />}
          <div className="hidden lg:flex lg:justify-between lg:items-center w-full">
            <div className="w-2/3 max-w-3xl">
              <NavMain />
            </div>
            <div className=" w-1/2 flex items-center justify-end">
              <div className="pl-8 pr-6">
                <DocsButton />
              </div>
              {/* TODO: add dark mode context */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
