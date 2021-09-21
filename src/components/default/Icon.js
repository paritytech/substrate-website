import React from 'react';

import forkless from '../../images/svg/forkless.svg';
import globeSolid from '../../images/svg/globe-solid.svg';
import hackathons from '../../images/svg/hackathons.svg';
import kusamaLogo from '../../images/svg/kusama_logo.svg';
import lightClient from '../../images/svg/light-client.svg';
import logoWhite from '../../images/svg/logo-white.svg';
import placeholder from '../../images/svg/placeholder.svg';
import polkadotLogo from '../../images/svg/polkadot-logo.svg';
import seminar from '../../images/svg/seminar.svg';
import shieldCheckSolid from '../../images/svg/shield-check-solid.svg';
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
import subconnectBrowserTab from '../../images/svg/subconnectBrowserTab.svg';
import flexible from '../../images/svg/technology/icon-flexible.svg';
import flexibleCropped from '../../images/svg/technology/icon-flexible-cropped.svg';
import futureProof from '../../images/svg/technology/icon-future-proof.svg';
import futureProofCropped from '../../images/svg/technology/icon-future-proof-cropped.svg';
import interoperable from '../../images/svg/technology/icon-interoperable.svg';
import interoperableCropped from '../../images/svg/technology/icon-interoperable-cropped.svg';
import open from '../../images/svg/technology/icon-open.svg';
import openCropped from '../../images/svg/technology/icon-open-cropped.svg';
import arrowBack from '../../images/svg/ui/arrow-back.svg';
import arrowDropdown from '../../images/svg/ui/arrow-dropdown.svg';
import arrowMore from '../../images/svg/ui/arrow-more.svg';
import arrowNext from '../../images/svg/ui/arrow-next.svg';
import calendar from '../../images/svg/ui/calendar.svg';
import close from '../../images/svg/ui/close-x.svg';
import diamondGreen from '../../images/svg/ui/diamond-green.svg';
import diamondPink from '../../images/svg/ui/diamond-pink.svg';
import diamondPurple from '../../images/svg/ui/diamond-purple.svg';
import diamondYellow from '../../images/svg/ui/diamond-yellow.svg';
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
  'kusama-logo': kusamaLogo,
  'polkadot-logo': polkadotLogo,
  /* headings */
  hackathons: hackathons,
  seminar: seminar,
  /* ui */
  'hamburger-toggle': hamburger,
  'close-x': close,
  'arrow-next': arrowNext,
  'arrow-dropdown': arrowDropdown,
  'arrow-more': arrowMore,
  'arrow-back': arrowBack,
  'sidebar-toggle': sidebarToggle,
  docs: docs,
  moon: moon,
  sun: sun,
  'external-link': externalLink,
  calendar: calendar,
  star: star,
  'diamond-yellow': diamondYellow,
  'diamond-pink': diamondPink,
  'diamond-purple': diamondPurple,
  'diamond-green': diamondGreen,
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
  'shield-check-solid': shieldCheckSolid,
  'globe-solid': globeSolid,
  'subconnect-browser-tab': subconnectBrowserTab,
  /* technology */
  'flexible-cropped': flexibleCropped,
  'future-proof-cropped': futureProofCropped,
  'interoperable-cropped': interoperableCropped,
  'open-cropped': openCropped,
  flexible: flexible,
  'future-proof': futureProof,
  interoperable: interoperable,
  open: open,
};

export default function Icon({ name, className }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5"></span>;
  return <IconComponent name={name} className={className}></IconComponent>;
}
