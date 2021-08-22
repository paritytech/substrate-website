import React from 'react';

import logo from '../../images/svg/logo.svg';
import logoWhite from '../../images/svg/logo-white.svg';
import arrowDropdown from '../../images/svg/ui/arrow-dropdown.svg';
import arrowNext from '../../images/svg/ui/arrow-next.svg';
import close from '../../images/svg/ui/close-x.svg';
import docs from '../../images/svg/ui/docs.svg';
import hamburger from '../../images/svg/ui/hamburger-toggle.svg';
import moon from '../../images/svg/ui/moon.svg';
import sidebarToggle from '../../images/svg/ui/sidebar-toggle.svg';
import sun from '../../images/svg/ui/sun.svg';

const iconsMap = {
  /* brand */
  logo: logo,
  'logo-white': logoWhite,
  /* ui */
  'hamburger-toggle': hamburger,
  'close-x': close,
  'arrow-next': arrowNext,
  'arrow-dropdown': arrowDropdown,
  'sidebar-toggle': sidebarToggle,
  docs: docs,
  moon: moon,
  sun: sun,
};

export default function Icon({ name }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5"></span>;
  return <IconComponent name={name}></IconComponent>;
}
