import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const VerticalCard = ({ title, children, link, index }) => {
  const aosDelay = index * 200;

  return (
    <Link to={link} data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="min-h-full lg:w-72 xl:w-96 lg:mr-8 mb-8 lg:mb-0 m:max-w-sm cursor-pointer shadow-xl p-8 hover:scale-105 transition-transform rounded-md z-10 bg-white relative">
        <div className="mb-8">
          <Icon name="placeholder" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="pb-6">
            <h3>{title}</h3>
            <p>{children}</p>
          </div>
          <div className="absolute bottom-8">
            <p className="font-bold border-b-2 border-black inline">Read More</p>{' '}
            <span className="fill-current border-b-0 text-black dark:text-white inline-block">
              <Icon name="arrow-more" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VerticalCard;
