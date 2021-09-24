import React from 'react';

const InfoCard = ({ index, title, description }) => {
  return (
    <div className="flex flex-col justify-center shadow-xl p-10 mb-8 border-l-8 border-substrateGreen-light2 bg-white dark:bg-substrateBlackish rounded-md">
      <div className="inline-flex mb-2">
        <div className="w-8 h-8 rounded-full bg-black dark:bg-substrateDarkest inline-flex flex-shrink-0 justify-center mr-2">
          <p className="text-white font-bold mt-1">{index}</p>
        </div>
        <h3 className="font-bold text-2xl inline mb-0">{title}</h3>
      </div>
      <p className="font-medium m-0">{description}</p>
    </div>
  );
};

export default InfoCard;
