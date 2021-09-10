import React from 'react';

import caseStudy from '../../images/svg/case-study.svg';
import forkless from '../../images/svg/forkless.svg';
import hackathons from '../../images/svg/hackathons.svg';
import lightClient from '../../images/svg/light-client.svg';
import logoWhite from '../../images/svg/logo-white.svg';
import placeholder from '../../images/svg/placeholder.svg';
import seminar from '../../images/svg/seminar.svg';
import discord from '../../images/svg/social/discord.svg';
import element from '../../images/svg/social/element.svg';
import element2 from '../../images/svg/social/element2.svg';
import github from '../../images/svg/social/github.svg';
import reddit from '../../images/svg/social/reddit.svg';
import so from '../../images/svg/social/so.svg';
import so2 from '../../images/svg/social/so2.svg';
import twitter from '../../images/svg/social/twitter.svg';
import twitter2 from '../../images/svg/social/twitter2.svg';
import youtube from '../../images/svg/social/youtube.svg';
import arrowDropdown from '../../images/svg/ui/arrow-dropdown.svg';
import arrowMore from '../../images/svg/ui/arrow-more.svg';
import arrowNext from '../../images/svg/ui/arrow-next.svg';
import calendar from '../../images/svg/ui/calendar.svg';
import close from '../../images/svg/ui/close-x.svg';
import docs from '../../images/svg/ui/docs.svg';
import externalLink from '../../images/svg/ui/external-link.svg';
import hamburger from '../../images/svg/ui/hamburger-toggle.svg';
import moon from '../../images/svg/ui/moon.svg';
import sidebarToggle from '../../images/svg/ui/sidebar-toggle.svg';
import star from '../../images/svg/ui/star.svg';
import sun from '../../images/svg/ui/sun.svg';
import w3fLogo from '../../images/svg/w3f-logo.svg';
import waLogo from '../../images/svg/wa-logo.svg';

const iconsMap = {
  /* brand */
  'logo-white': logoWhite,
  'w3f-logo': w3fLogo,
  /* headings */
  hackathons: hackathons,
  seminar: seminar,
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
  'external-link': externalLink,
  calendar: calendar,
  star: star,
  /* mockup */
  placeholder: placeholder,
  /* social */
  twitter: twitter,
  twitter2: twitter2,
  'stack-overflow': so,
  'stack-overflow-2': so2,
  element: element,
  element2: element2,
  youtube: youtube,
  reddit: reddit,
  github: github,
  discord: discord,
  /* highlights */
  'wa-logo': waLogo,
  forkless: forkless,
  'light-client': lightClient,
  'case-study': caseStudy,
};

export default function Icon({ name, className }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5"></span>;
  return <IconComponent name={name} className={className}></IconComponent>;
}
