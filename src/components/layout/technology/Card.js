import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const Card = ({ title, children, link }) => {
  return (
    <Link to={link}>
      <div className="min-h-full flex justify-between cursor-pointer shadow-xl p-8 hover:scale-105 transition-all">
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h3>{title}</h3>
            <p>{children}</p>
          </div>
          <div>
            <p className="font-bold border-b-2 border-black inline">
              Read More{' '}
              <span className="fill-current text-black dark:text-white inline-block">
                <Icon name="arrow-more" />
              </span>
            </p>
          </div>
        </div>
        <div className="bg-gray-200 w-40 h-40 m-8 self-center">Placeholder</div>
      </div>
    </Link>
  );
};

export default Card;
