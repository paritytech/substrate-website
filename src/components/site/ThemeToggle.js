import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import Icon from '../default/Icon';

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
    <div className="cursor-pointer hover:opacity-60 transition-opacity" onClick={toggleTheme}>
      {colorMode === 'light' && (
        <div className="transform -rotate-12">
          <Icon name="sun" />
        </div>
      )}
      {colorMode === 'dark' && (
        <div>
          <Icon name="moon" />
        </div>
      )}
    </div>
  );
}
