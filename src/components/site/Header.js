import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

// import NavMain from './NavMain';
import useScrollListener from '../../hooks/use-scroll-listener';
import Logo from './Logo';

const Header = () => {
  const scroll = useScrollListener();
  const [menuHeight, setMenuHeight] = useState('h-24');

  useEffect(() => {
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
          <div className="w-40 relative">
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
