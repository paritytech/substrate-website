import React from 'react';

import Icon from '../default/Icon';
import { Link } from '../default/Link';

const LineArrowButton = ({ link, className, children }) => {
  return (
    <div className={className}>
      <Link to={link}>
        <p className="font-bold pb-1 mr-0.5 border-b-2 border-black dark:border-white inline hover:mr-2 transition-all">
          {children}
        </p>{' '}
        <span className="fill-current dark:text-white inline-block">
          <Icon name="arrow-more" />
        </span>
      </Link>
    </div>
  );
};

export default LineArrowButton;
