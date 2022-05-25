import * as React from 'react';

function SvgSidebarToggle(props) {
  return (
    <svg width={12} height={10} viewBox="0 0 12 10" {...props}>
      <path d="M10.9 9.9a.7.7 0 00.7-.7V.8a.7.7 0 00-1.4 0v8.4a.7.7 0 00.7.7zM3.695 3.395a.7.7 0 00-.99-.99l-2.1 2.1a.7.7 0 000 .99l2.1 2.1a.7.7 0 10.99-.99L2.79 5.7H8.1a.7.7 0 100-1.4H2.79l.905-.905z" />
    </svg>
  );
}

export default SvgSidebarToggle;
