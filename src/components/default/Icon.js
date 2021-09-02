import React from 'react';

import forkless from '../../images/svg/forkless.svg';
import lightClient from '../../images/svg/light-client.svg';
import logoWhite from '../../images/svg/logo-white.svg';
import placeholder from '../../images/svg/placeholder.svg';
import element from '../../images/svg/social/element.svg';
import so from '../../images/svg/social/so.svg';
import twitter from '../../images/svg/social/twitter.svg';
import arrowDropdown from '../../images/svg/ui/arrow-dropdown.svg';
import arrowMore from '../../images/svg/ui/arrow-more.svg';
import arrowNext from '../../images/svg/ui/arrow-next.svg';
import close from '../../images/svg/ui/close-x.svg';
import docs from '../../images/svg/ui/docs.svg';
import hamburger from '../../images/svg/ui/hamburger-toggle.svg';
import moon from '../../images/svg/ui/moon.svg';
import sidebarToggle from '../../images/svg/ui/sidebar-toggle.svg';
import sun from '../../images/svg/ui/sun.svg';
import waLogo from '../../images/svg/wa-logo.svg';

const iconsMap = {
  /* brand */
  'logo-white': logoWhite,
  /* ui */
  'hamburger-toggle': hamburger,
  'close-x': close,
  'arrow-next': arrowNext,
  'arrow-dropdown': arrowDropdown,
  'arrow-more': arrowMore,
  'sidebar-toggle': sidebarToggle,
  docs: docs,
  moon: moon,
  sun: sun,
  /* mockup */
  placeholder: placeholder,
  /* social */
  twitter: twitter,
  stackoverflow: so,
  element: element,
  /* highlights */
  'wa-logo': waLogo,
  forkless: forkless,
  'light-client': lightClient,
};

export default function Icon({ name, className }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5"></span>;
  return <IconComponent name={name} className={className}></IconComponent>;
}
