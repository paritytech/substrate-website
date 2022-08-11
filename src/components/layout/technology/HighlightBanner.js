import { Icon } from 'gatsby-plugin-substrate';
import React from 'react';

const HighlightBanner = ({ icon, children }) => {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateBlackish p-8 mb-20">
      <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 md:items-center lg:mx-auto max-w-7xl">
        <Icon name={icon} className="justify-self-center md:justify-self-end w-1/3 md:w-1/2 md:max-h-52 mb-6 md:mb-0" />
        <div className="md:mx-8 col-span-2">
          <p className="m-0 p-0 text-xl md:text-2xl font-normal max-w-2xl">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBanner;
