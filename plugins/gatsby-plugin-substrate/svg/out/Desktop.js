import * as React from 'react';

function SvgDesktop(props) {
  return (
    <svg width={28} height={28} fill="none" {...props}>
      <path d="M25.667 2H2.333A2.334 2.334 0 000 4.333V19.89a2.334 2.334 0 002.333 2.333h9.334l-.778 2.334h-3.5a1.17 1.17 0 00-1.167 1.166A1.17 1.17 0 007.39 26.89H20.61a1.167 1.167 0 000-2.333h-3.5l-.778-2.334h9.334A2.334 2.334 0 0028 19.89V4.333A2.334 2.334 0 0025.667 2zm-.778 14H3.11V5.111H24.89V16z" />
    </svg>
  );
}

export default SvgDesktop;
