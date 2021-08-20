import { Link } from 'gatsby';
import React from 'react';

import Icon from '../default/Icon';
import NavLegal from './NavLegal';

const Footer = () => {
  return (
    <footer className="w-full px-6 xl:px-12 2xl:px-28 bg-substrateDark text-white">
      <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:pt-12 lg:pb-3 border-b-2 border-gray-600">
        <div className="w-44 lg::h-7 relative py-12 lg:p-0 transform transition-all duration-300 ease-in-out hover:opacity-50">
          <Link to="/">
            <Icon name="logo-white"></Icon>
          </Link>
        </div>
        <div className="py-12">
          <NavLegal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
