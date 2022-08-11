import { Icon } from 'gatsby-plugin-substrate';
import parse from 'html-react-parser';
import React, { useState } from 'react';
import Children from 'react-children-utilities';

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

function Code({ html, className }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={`${className} relative mt-2 mb-8 grid grid-cols-1`}>
      <div className="rococo-code-block" dangerouslySetInnerHTML={{ __html: html }}></div>
      <button
        onClick={() => {
          copyToClipboard(Children.onlyText(parse(html)));
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1300);
        }}
        className="absolute top-0 bottom-0 right-0 dark:text-white text-small dark:hover:text-substrateGreen hover:text-substrateGreen-dark transition-colors"
      >
        {isCopied ? (
          <span className="text-substrateGreen-dark dark:text-substrateGreen w-100 mr-5">Copied</span>
        ) : (
          <Icon name="copy" className="fill-current mr-8 ml-4" />
        )}
      </button>
    </div>
  );
}

export { Code };
