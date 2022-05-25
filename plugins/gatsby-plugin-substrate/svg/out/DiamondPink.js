import * as React from 'react';

function SvgDiamondPink(props) {
  return (
    <svg width={44} height={40} fill="none" {...props}>
      <path fill="#FFCFFA" d="M0 27.91l7.22 12L21.857 0 0 27.91z" />
      <path fill="#F481AB" d="M7.219 39.91h29.278L21.857 0 7.22 39.91z" />
      <path fill="#DA5D8A" d="M36.495 39.91l7.215-12L21.856 0l14.64 39.91z" />
    </svg>
  );
}

export default SvgDiamondPink;
