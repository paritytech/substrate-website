import React from 'react';

import Icon from '../../default/Icon';

const HighlightBanner = ({ icon, children }) => {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateBlackish p-8 mb-20">
      <div className="flex flex-col md:flex-row items-center lg:mx-auto max-w-7xl">
        <Icon name={icon} className="mx-auto" />
        <div className="md:mx-8">
          <p className="m-0 p-0 text-xl md:text-2xl font-normal max-w-4xl">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBanner;
