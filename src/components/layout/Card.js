import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={className + ' rounded-md shadow-xl dark:bg-substrateBlackish hover:scale-105 transition-transform'}>
      {children}
    </div>
  );
};

export default Card;
