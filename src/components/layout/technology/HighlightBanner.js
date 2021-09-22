import React from 'react';

import Icon from '../../default/Icon';

const HighlightBanner = ({ icon, children }) => {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateBlackish p-8 mb-20">
      <div className="md:grid md:grid-cols-3 md:items-center lg:mx-auto max-w-7xl">
        <Icon name={icon} className="pr-16 md:pr-0 w-1/2 md:max-h-52 md:justify-self-end" />
        <div className="md:mx-8 col-span-2">
          <p className="m-0 p-0 text-xl md:text-2xl font-normal max-w-2xl">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBanner;
