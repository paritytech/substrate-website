import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const Card = ({ title, description, link, icon, color, linkText }) => {
  let titleIcon;
  if (icon) {
    titleIcon = <Icon name={icon} className="inline-block mr-3" />;
  }

  return (
    <Link to={link}>
      <div className="cursor-pointer shadow-xl px-6 py-8 hover:scale-105 transition-transform rounded-md bg-white dark:bg-substrateBlackish relative">
        <h3 className="h5">
          {titleIcon}
          {title}
        </h3>
        <div className="flex flex-col justify-between">
          <p className="mb-16 mt-6 pl-5 relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded"
              style={{ backgroundColor: color }}
            ></div>
            {description}
          </p>
          <div className="absolute bottom-8">
            <p className="font-bold border-b-2 border-black dark:border-white inline hover:mr-1 transition-all">
              {linkText}
            </p>{' '}
            <span className="fill-current border-b-0 text-black dark:text-white inline-block">
              <Icon name="arrow-more" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
