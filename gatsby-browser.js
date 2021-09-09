import './src/styles/global.css';
import './src/styles/scss/styles.scss';

import React from 'react';

import { ThemeProvider } from './src/contexts/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <div>{element}</div>
  </ThemeProvider>
);
