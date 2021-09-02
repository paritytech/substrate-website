import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import Icon from '../default/Icon';

// TODO: add dark mode context

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  function toggleTheme() {
    if (colorMode === 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  }

  return (
    <div className="cursor-pointer" onClick={toggleTheme}>
      {colorMode === 'light' && (
        <div className="transform -rotate-12">
          <Icon name="moon" />
        </div>
      )}
      {colorMode === 'dark' && (
        <div>
          <Icon name="sun" />
        </div>
      )}
    </div>
  );
}
