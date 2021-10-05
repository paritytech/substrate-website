import React from 'react';

import Icon from './Icon';

const FlipIcon = ({ icons }) => {
  return (
    <div className="relative w-full">
      <Icon name={icons[0]} className="w-full h-auto" />
      <Icon
        name={icons[1]}
        className="w-full h-full absolute left-0 top-0 bg-white dark:bg-substrateDarkest"
        data-aos="fade-in"
        data-aos-delay="300"
      />
    </div>
  );
};

export default FlipIcon;
