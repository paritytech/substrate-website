import React, { useState } from 'react';
import Children from 'react-children-utilities';

import Icon from '../Icon';

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function Code({ children, className }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div>
      <pre className={className}>{children}</pre>
      <button
        onClick={() => {
          copyToClipboard(Children.onlyText(children));
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1300);
        }}
        className="sm:w-20 sm:block absolute top-0 bottom-0 right-0 dark:text-white text-small dark:hover:text-substrateGreen hover:text-substrateGreen-dark transition-colors"
      >
        {isCopied ? (
          <span className="text-substrateGreen-dark dark:text-substrateGreen w-100 mr-7">Copied</span>
        ) : (
          <Icon name="copy" className="block fill-current mr-8 sm:mr-0 ml-4" />
        )}
      </button>
    </div>
  );
}

export { Code };