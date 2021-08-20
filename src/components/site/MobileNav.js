import { Link } from 'gatsby';
import React from 'react';

import Icon from '../default/Icon';

const MobileNav = ({ toggleMenu }) => {
  return (
    <div className="lg:hidden absolute inset-0 bg-substrateGray-light dark:bg-black z-90 animate-fade-in-right">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="w-32">
          <Link to="/">
            <Icon name="logo" />
          </Link>
        </div>
        <div className="h-auto cursor-pointer" onClick={toggleMenu}>
          <Icon name="close-x" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
