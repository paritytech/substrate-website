import React from 'react';

import { Link } from '../../default/Link';

const Card = ({ children, link }) => {
  return (
    <div className="cursor-pointer shadow-xl hover:scale-105 transition-all">
      <Link to={link}>
        <div className="p-8">{children}</div>
      </Link>
    </div>
  );
};

export default Card;
