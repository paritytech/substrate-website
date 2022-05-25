import * as React from 'react';

function SvgDiamondPurple(props) {
  return (
    <svg width={36} height={36} fill="none" {...props}>
      <path fill="#A17FEB" d="M35.065 0H6.937L15.5 36 35.065 0z" />
      <path fill="#DDCDFF" d="M0 15.522L6.936 0 15.5 36 0 15.522z" />
      <path fill="#714CC0" d="M35.064 0L15.5 36h16l3.564-36z" />
    </svg>
  );
}

export default SvgDiamondPurple;
