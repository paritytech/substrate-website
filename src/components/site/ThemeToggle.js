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
      {colorMode === 'light' && <Icon name="sun" />}
      {colorMode === 'dark' && <Icon name="moon" className="transform -rotate-12" />}
    </div>
  );
}
