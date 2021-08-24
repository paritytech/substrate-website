import React from 'react';

import { Link } from '../../default/Link';

const Card = ({ children, link }) => {
  return (
    <Link to={link}>
      <div className="min-h-full flex justify-between cursor-pointer shadow-xl p-8 hover:scale-105 transition-all">
        {children}
      </div>
    </Link>
  );
};

export default Card;
