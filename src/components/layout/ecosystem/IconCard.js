import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';
import LineArrowButton from '../../ui/LineArrowButton';

const IconCard = ({ title, description, link, delay, icon, color, linkText }) => {
  let titleIcon;
  if (icon) {
    titleIcon = <Icon name={icon} className="inline-block mr-3 fill-current text-substrateBlackish dark:text-white" />;
  }

  return (
    <Link to={link} data-aos="fade-up" data-aos-delay={delay ? delay : 0}>
      <div className="cursor-pointer shadow-xl px-6 py-8 hover:scale-105 transition-transform rounded-md bg-white dark:bg-substrateBlackish relative min-h-full">
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
          <LineArrowButton className="absolute bottom-8" link={link}>
            {linkText}
          </LineArrowButton>
        </div>
      </div>
    </Link>
  );
};

export default IconCard;
