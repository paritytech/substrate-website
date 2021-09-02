import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import Icon from '../default/Icon';

// TODO: add dark mode context

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const [localColor, setLocalColor] = useState(null);

  function toggleTheme() {
    if (colorMode === 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  }

  useEffect(() => {
    setLocalColor(colorMode);
  }, [colorMode]);

  return (
    <div className="cursor-pointer" onClick={toggleTheme}>
      {localColor === 'light' && (
        <div className="transform -rotate-12">
          <Icon name="sun" />
        </div>
      )}
      {localColor === 'dark' && (
        <div>
          <Icon name="moon" />
        </div>
      )}
    </div>
  );
}
