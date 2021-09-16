import React from 'react';

import { Link } from '../default/Link';

const SecondaryButton = ({ children, link }) => {
  return (
    <Link to={link}>
      <div className="bg-substrateBlackish dark:bg-substrateDarkThemeLightGrey px-5 py-2 inline-block rounded-md hover:opacity-80 transition-opacity">
        <div className="font-bold mb-0 text-white dark:text-black">{children}</div>
      </div>
    </Link>
  );
};

export default SecondaryButton;
