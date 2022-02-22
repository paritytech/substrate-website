import cx from 'classnames';
import React, { useState } from 'react';

import Icon from '../default/Icon';

export default function Accordion({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cx('')}>
      <div className="flex items-center justify-between capitalize mb-8" onClick={() => setIsOpen(!isOpen)}>
        <p className="mb-0 text-xl font-medium w-3/4">{title}</p>
        <Icon name="arrow-dropdown" className={cx('duration-300 ease-in-out', { '-rotate-180': isOpen })} />
      </div>
      <div
        className={cx(
          'relative overflow-hidden transition-all transform duration-500 ease-in-out mb-2',
          { 'max-h-auto animate-fade-in': isOpen },
          { 'max-h-0': !isOpen }
        )}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
}
