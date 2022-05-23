import cx from 'classnames';
import { Link } from 'gatsby-plugin-substrate';
import React from 'react';

const SecondaryButton = ({ children, className, link }) => {
  return (
    <Link to={link}>
      <div
        className={cx(
          className +
            ' bg-substrateBlackish dark:bg-substrateDarkThemeLightGrey inline-block rounded-md hover:opacity-80 transition-opacity px-5 py-2'
        )}
      >
        <div className="font-bold mb-0 text-white dark:text-black">{children}</div>
      </div>
    </Link>
  );
};

export default SecondaryButton;
