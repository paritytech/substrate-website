import cx from 'classnames';
import React from 'react';

import Icon from '../default/Icon';
import { Link } from '../default/Link';

const LineArrowButton = ({ link, className, primary, large, children }) => {
  return (
    <div className={className}>
      <Link to={link}>
        <p
          className={cx('font-bold pb-1 mr-0.5 border-b-2 inline hover:mr-2 transition-all', {
            'border-substrateGreen text-substrateGreen': primary,
            'border-black dark:border-white': !primary,
            'text-xl': large,
          })}
        >
          {children}
        </p>{' '}
        <span className="fill-current dark:text-white inline-block">
          <Icon
            name="arrow-more"
            className={cx({
              'fill-current text-substrateGreen': primary,
              'w-3 h-3': large,
            })}
          />
        </span>
      </Link>
    </div>
  );
};

export default LineArrowButton;
