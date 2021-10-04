import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import Icon from '../default/Icon';

export default function ThemeToggle() {
  const { colorMode, setThemeMode } = useContext(ThemeContext);

  function toggleTheme() {
    if (colorMode === 'dark') {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  }

  console.log(colorMode);

  return (
    <div className="cursor-pointer hover:opacity-60 transition-opacity" onClick={toggleTheme}>
      <Icon name={colorMode} />
    </div>
  );
}
