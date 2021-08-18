import React from 'react';

import NavExtra from './NavExtra';
import NavMain from './NavMain';
import SelectLanguage from './SelectLanguage';

const Header = () => {
  return (
    <header>
      <NavMain />
      <NavExtra />
      <nav>
        <SelectLanguage />
      </nav>
    </header>
  );
};

export default Header;
