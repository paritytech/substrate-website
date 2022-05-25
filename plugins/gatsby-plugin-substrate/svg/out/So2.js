import * as React from 'react';

function SvgSo2(props) {
  return (
    <svg width={30} height={36} fill="none" viewBox="0 0 30 36" {...props}>
      <path
        fill="#BBB"
        fillRule="evenodd"
        d="M25.307 23.206h3.163V36H0V23.206h3.163V32.8h22.144v-9.595z"
        clipRule="evenodd"
      />
      <path
        fill="#F58025"
        d="M6.611 22.255l15.537 3.302.653-3.14-15.537-3.304-.653 3.142zm2.056-7.522L23.06 21.51l1.34-2.91-14.392-6.777-1.34 2.91zm3.982-7.14l12.202 10.274 2.032-2.467L14.682 5.127l-2.033 2.467zM20.526 0l-2.548 1.916 9.476 12.881L30 12.882 20.526 0zM6.327 29.603h15.817v-3.199H6.327v3.199z"
      />
    </svg>
  );
}

export default SvgSo2;
