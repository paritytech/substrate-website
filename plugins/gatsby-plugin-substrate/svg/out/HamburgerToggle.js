import * as React from 'react';

function SvgHamburgerToggle(props) {
  return (
    <svg width={24} height={16} {...props}>
      <path d="M0 14.667C0 15.403.597 16 1.333 16h21.334a1.333 1.333 0 000-2.667H1.333C.597 13.333 0 13.93 0 14.667zM0 8c0 .736.597 1.333 1.333 1.333h21.334a1.333 1.333 0 000-2.666H1.333C.597 6.667 0 7.264 0 8zm1.333-8a1.333 1.333 0 000 2.667h21.334a1.333 1.333 0 000-2.667H1.333z" />
    </svg>
  );
}

export default SvgHamburgerToggle;
