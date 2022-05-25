import * as React from 'react';

function SvgPen(props) {
  return (
    <svg width={29} height={28} fill="none" viewBox="0 0 29 28" {...props}>
      <g clipPath="url(#pen_svg__clip0)">
        <path d="M25.069 8.154a2.42 2.42 0 000-3.42l-3.026-3.026a2.42 2.42 0 00-3.42 0l-2.847 2.847 6.4 6.445 2.893-2.846zm-10.427-2.46L1.566 18.768a.806.806 0 00-.22.411L.02 25.811a.806.806 0 00.948.948l6.63-1.327a.806.806 0 00.412-.22l13.075-13.075-6.443-6.444zm13.15 18.667H12.487c-.67 0-1.209.538-1.209 1.208 0 .67.54 1.208 1.209 1.208h15.305a1.209 1.209 0 000-2.416z" />
      </g>
      <defs>
        <clipPath id="pen_svg__clip0">
          <path d="M0 0h29v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPen;
