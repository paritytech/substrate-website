import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { isBrowser } from '../../utils/browser';
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

  React.useEffect(() => {
    if (isBrowser) {
      setThemeMode(colorMode);
      console.log('useffect: ' + colorMode);
    }
  }, []);

  console.log(colorMode);

  return (
    <div className="cursor-pointer hover:opacity-60 transition-opacity" onClick={toggleTheme}>
      <Icon name={colorMode} />
    </div>
  );
}
