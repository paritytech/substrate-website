import React from 'react';

import Icon from './Icon';

const FlipIcon = ({ icons }) => {
  return (
    <div className="relative w-full h-0" style={{ paddingTop: 'calc(1 / 1 * 100%)' }}>
      <div className="absolute w-full top-0">
        <Icon name={icons[0]} className="w-full h-auto" />
      </div>
      <div data-aos="fade-in" data-aos-delay="700" className="top-0 bg-white dark:bg-substrateDarkest absolute w-full">
        <Icon name={icons[1]} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default FlipIcon;
