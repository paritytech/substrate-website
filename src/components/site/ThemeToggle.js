import React from 'react';

import Icon from '../default/Icon';

// TODO: add dark mode context

export default function ThemeToggle() {
  return (
    <div className="cursor-pointer">
      <div className="hidden transform -rotate-12">
        <Icon name="moon" />
      </div>
      <div>
        <Icon name="sun" />
      </div>
    </div>
  );
}
