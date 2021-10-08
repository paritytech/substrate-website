import './src/styles/global.css';
import './src/styles/scss/styles.scss';

import React from 'react';

import { DataProvider } from './src/contexts/DataContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <div>{element}</div>
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => <DataProvider value={props}>{element}</DataProvider>;

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0);

  return false;
};
