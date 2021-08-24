import React from 'react';

const Card = ({ children }) => {
  return <div className="shadow-lg p-8 hover:scale-105 transition-all">{children}</div>;
};

export default Card;
