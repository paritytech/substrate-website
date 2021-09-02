import './src/styles/tailwind.css';
import './src/styles/scss/index.scss';

import React from 'react';

import { ThemeProvider } from './src/contexts/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <div>{element}</div>
  </ThemeProvider>
);
