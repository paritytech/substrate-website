import React from 'react';

import hamburger from '../../images/svg/ui/hamburger-toggle.svg';

const iconsMap = {
  /* ui */
  'hamburger-toggle': hamburger,
};

export default function Icon({ name }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5">missing</span>;
  return <IconComponent name={name}></IconComponent>;
}
