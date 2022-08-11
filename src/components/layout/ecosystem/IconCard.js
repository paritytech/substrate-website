import { Icon, LineArrowButton, Link } from 'gatsby-plugin-substrate';
import React from 'react';

const IconCard = ({ title, description, link, delay, icon, color, linkText }) => {
  let titleIcon;
  if (icon) {
    titleIcon = <Icon name={icon} className="inline-block mr-3 fill-current text-substrateBlackish dark:text-white" />;
  }

  return (
    <Link to={link} data-aos="fade-up" data-aos-delay={delay ? delay : 0}>
      <div className="cursor-pointer shadow-xl px-6 py-8 hover:scale-105 transition-transform rounded-md bg-white dark:bg-substrateBlackish relative min-h-full">
        <div className="flex">
          {titleIcon}
          <h3 className="font-bold text-xl mb-4">{title}</h3>
        </div>
        <div className="flex flex-col justify-between">
          <div className="mb-16 mt-6 pl-5 relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded"
              style={{ backgroundColor: color }}
            ></div>
            <p className="mb-0">{description}</p>
          </div>
          <LineArrowButton className="absolute bottom-8">{linkText}</LineArrowButton>
        </div>
      </div>
    </Link>
  );
};

export default IconCard;
