import './src/styles/global.css';
import './src/styles/scss/styles.scss';

import React from 'react';

import { DataProvider } from './src/contexts/DataContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;

export const wrapPageElement = ({ element, props }) => <DataProvider props={props}>{element}</DataProvider>;

// reset scroll position to top
// export const shouldUpdateScroll = () => {
//   window.scrollTo(0, 0);
//   return false;
// };

/* overide update scroll position on route change;
   see: https://github.com/alexluong/gatsby-packages/issues/33 */
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (!window || !location) {
    return [0, 0];
  }
  // TODO: bypass forcing scroll programmatically on pages with article nav
  const keepScroll = [
    '/vision/substrate-and-polkadot',
    '/ecosystem/resources/awesome-substrate',
    '/ecosystem/projects/case-studies/acala',
    '/ecosystem/projects/case-studies/moonbeam',
    '/ecosystem/projects/case-studies/astar',
  ];
  if (keepScroll.includes(location.pathname)) {
    return false;
  }

  window.scrollTo(0, 0);
  return false;
};
