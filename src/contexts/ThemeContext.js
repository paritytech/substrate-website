import React from 'react';
import { useState } from 'react';

// import { isBrowser } from '../utils/browser';

function getInitialColorMode() {
  if (typeof window !== 'undefined') {
    const persistedColorPreference = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
  }

  return 'light';
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(getInitialColorMode());

  const setThemeMode = value => {
    setColorMode(value);
    // Set Tailwind color mode
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (value === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    // Persist on update
    localStorage.theme = value;
  };

  return <ThemeContext.Provider value={{ colorMode, setThemeMode }}>{children}</ThemeContext.Provider>;
};
