import React from 'react';

const Card = ({ children }) => {
  return <div className="shadow-xl p-8 hover:scale-105 transition-all">{children}</div>;
};

export default Card;
