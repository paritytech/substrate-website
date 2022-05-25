import * as React from 'react';

function SvgDiamondGreen(props) {
  return (
    <svg fill="none" viewBox="0 0 46 42" {...props}>
      <path fill="#24CC85" d="M38.405 0H7.598L31.23 19.558 38.405 0z" />
      <path fill="#D4F9EC" d="M7.596 0L0 12.629 23 42l8.23-22.442L7.596 0z" />
      <path fill="#0E8F59" d="M38.404 0L31.23 19.558 23 42l23-29.371L38.404 0z" />
    </svg>
  );
}

export default SvgDiamondGreen;
