import * as React from 'react';

function SvgGovernance(props) {
  return (
    <svg width={60} height={60} fill="none" viewBox="0 0 60 60" {...props}>
      <g clipPath="url(#governance_svg__clip0)">
        <path d="M44.25 39.125H40.5V24.096c0-1.224-1.01-2.221-2.25-2.221H33v2.875h4.5V42h6.75c.414 0 .75-.322.75-.719v-1.437c0-.397-.336-.719-.75-.719zm-14.614-20.08l-9 2.235a1.491 1.491 0 00-1.136 1.445v16.4h-3.75c-.414 0-.75.322-.75.719v1.437c0 .397.336.719.75.719H31.5V20.49c0-.969-.917-1.68-1.864-1.445zm-2.261 12.892c-.621 0-1.125-.643-1.125-1.437s.504-1.438 1.125-1.438 1.125.644 1.125 1.438c0 .794-.504 1.438-1.125 1.438z" />
      </g>
      <defs>
        <clipPath id="governance_svg__clip0">
          <path fill="#fff" d="M0 0h30v23H0z" transform="translate(15 19)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgGovernance;
