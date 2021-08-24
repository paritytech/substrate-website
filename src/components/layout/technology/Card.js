import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const Card = ({ title, children, link }) => {
  return (
    <Link to={link} data-aos="fade-up">
      <div className="min-h-full md:flex justify-between cursor-pointer shadow-xl p-8 hover:scale-105 transition-transform rounded-md">
        <div className="flex flex-col justify-between md:w-1/2 mb-8 md:mb-0">
          <div>
            <h3>{title}</h3>
            <p>{children}</p>
          </div>
          <div>
            <p className="font-bold border-b-2 border-black inline">Read More</p>{' '}
            <span className="fill-current border-b-0 text-black dark:text-white inline-block">
              <Icon name="arrow-more" />
            </span>
          </div>
        </div>
        <div className="md:m-8 md:mr-0 self-center md:w-1/2">
          <Icon name="placeholder" className="w-56 md:w-full h-auto" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
