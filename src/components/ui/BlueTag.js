import cx from 'classnames';
import React from 'react';

export default function BlueTag({ title }) {
  return (
    <button
      className={cx(
        'inline-block text-xs mr-4 px-3 py-2 rounded cursor-text',
        'bg-substrateBlue bg-opacity-5 dark:bg-substrateDark',
        'border border-substrateBlue  border-opacity-20 dark:border-substrateWhite'
      )}
    >
      {title}
    </button>
  );
}
