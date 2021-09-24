import React from 'react';

import chain from '../../images/svg/chain.svg';
import computer from '../../images/svg/computer.svg';
import contact from '../../images/svg/contact.svg';
import desktop from '../../images/svg/desktop.svg';
import dollar from '../../images/svg/dollar.svg';
import builders from '../../images/svg/ecosystem/builders.svg';
import connect from '../../images/svg/ecosystem/connect.svg';
import explore from '../../images/svg/ecosystem/explore.svg';
import opportunities from '../../images/svg/ecosystem/opportunities.svg';
import resources from '../../images/svg/ecosystem/resources.svg';
import event from '../../images/svg/event.svg';
import forkless from '../../images/svg/forkless.svg';
import globeSolid from '../../images/svg/globe-solid.svg';
import graduation from '../../images/svg/graduation.svg';
import hackathons from '../../images/svg/hackathons.svg';
import house from '../../images/svg/house.svg';
import kusamaLogo from '../../images/svg/kusama_logo.svg';
import layers from '../../images/svg/layers.svg';
import lightClient from '../../images/svg/light-client.svg';
import logoWhite from '../../images/svg/logo-white.svg';
import paperplane from '../../images/svg/paperplane.svg';
import pen from '../../images/svg/pen.svg';
import placeholder from '../../images/svg/placeholder.svg';
import polkadotLogo from '../../images/svg/polkadot-logo.svg';
import seminar from '../../images/svg/seminar.svg';
import shieldCheckSolid from '../../images/svg/shield-check-solid.svg';
import smile from '../../images/svg/smile.svg';
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
import arrowBack from '../../images/svg/ui/arrow-back.svg';
import arrowDropdown from '../../images/svg/ui/arrow-dropdown.svg';
import arrowMore from '../../images/svg/ui/arrow-more.svg';
import arrowNext from '../../images/svg/ui/arrow-next.svg';
import calendar from '../../images/svg/ui/calendar.svg';
import close from '../../images/svg/ui/close-x.svg';
import docs from '../../images/svg/ui/docs.svg';
import externalLink from '../../images/svg/ui/external-link.svg';
import hamburger from '../../images/svg/ui/hamburger-toggle.svg';
import moon from '../../images/svg/ui/moon.svg';
import play from '../../images/svg/ui/play.svg';
import sidebarToggle from '../../images/svg/ui/sidebar-toggle.svg';
import star from '../../images/svg/ui/star.svg';
import sun from '../../images/svg/ui/sun.svg';
import w3fLogo from '../../images/svg/w3f-logo.svg';
import waLogo from '../../images/svg/wa-logo.svg';

const iconsMap = {
  /* ecosystem */
  opportunities: opportunities,
  resources: resources,
  connect: connect,
  builders: builders,
  explore: explore,
  /* brand */
  'logo-white': logoWhite,
  'w3f-logo': w3fLogo,
  'kusama-logo': kusamaLogo,
  'polkadot-logo': polkadotLogo,
  /* headings */
  hackathons: hackathons,
  seminar: seminar,
  dollar: dollar,
  desktop: desktop,
  graduation: graduation,
  smile: smile,
  house: house,
  contact: contact,
  paperplane: paperplane,
  pen: pen,
  event: event,
  chain: chain,
  layers: layers,
  computer: computer,
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
  play: play,
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
};

export default function Icon({ name, className }) {
  if (!name) return <span className="w-5"></span>;
  const IconComponent = iconsMap[name];
  if (!IconComponent) return <span className="w-5"></span>;
  return <IconComponent name={name} className={className}></IconComponent>;
}
