import React from 'react';

const BorderCard = ({ className, children }) => {
  return (
    <div
      className={
        'relative z-10 py-2 border-2 rounded-md shadow-md border-gray-300 bg-white dark:bg-substrateBlackish text-center ' +
        className
      }
    >
      {children}
    </div>
  );
};

export default BorderCard;
