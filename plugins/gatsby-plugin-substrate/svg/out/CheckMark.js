import * as React from 'react';

function SvgCheckMark(props) {
  return (
    <svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
      <path
        fill="#24CC85"
        d="M28.571 32H3.43A3.429 3.429 0 010 28.571V3.43A3.429 3.429 0 013.429 0H28.57A3.429 3.429 0 0132 3.429V28.57A3.429 3.429 0 0128.571 32zm-14.62-7.004l13.143-13.143a1.143 1.143 0 000-1.616L25.478 8.62a1.143 1.143 0 00-1.617 0L13.143 19.34l-5.004-5.004a1.143 1.143 0 00-1.617 0L4.906 15.95a1.143 1.143 0 000 1.616l7.429 7.429c.446.446 1.17.446 1.616 0z"
      />
    </svg>
  );
}

export default SvgCheckMark;
