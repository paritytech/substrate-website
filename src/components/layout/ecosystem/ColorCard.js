import React from 'react';

const ColorCard = ({ className, children }) => {
  return (
    <div className={'aspect-w-13 aspect-h-11 ' + className}>
      <div className="flex justify-center items-center p-4 text-center rounded-md shadow-xl bg-substrateGreen-light text-substrateBlackish border-2 border-substrateGreen">
        <span>{children}</span>
      </div>
    </div>
  );
};

export default ColorCard;
