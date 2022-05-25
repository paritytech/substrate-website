import { Icon } from 'gatsby-plugin-substrate';
import React from 'react';

const FlipIcon = ({ icons }) => {
  return (
    <div className="relative w-full">
      <Icon name={icons[0]} className="w-full h-auto" />
      <div
        data-aos="fade-in"
        data-aos-delay="300"
        className="w-full h-full absolute left-0 top-0 bg-white dark:bg-substrateDarkest"
      >
        <Icon name={icons[1]} />
      </div>
    </div>
  );
};

export default FlipIcon;
