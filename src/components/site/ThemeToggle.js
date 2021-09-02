import React, { useContext } from 'react';

import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';
import Icon from '../default/Icon';

// TODO: add dark mode context

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  function toggleTheme() {
    if (colorMode == 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  }

  return (
    <ThemeProvider>
      <div className="cursor-pointer" onClick={toggleTheme}>
        {colorMode == 'light' ? (
          <div className="transform -rotate-12">
            <Icon name="moon" />
          </div>
        ) : (
          <div>
            <Icon name="sun" />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
