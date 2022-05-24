import * as React from 'react';

function SvgElement2(props) {
  return (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 30 30" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.8 1.8A1.8 1.8 0 0112.6 0c6.628 0 12 5.373 12 12a1.8 1.8 0 01-3.6 0 8.4 8.4 0 00-8.4-8.4 1.8 1.8 0 01-1.8-1.8zM19.2 28.2a1.8 1.8 0 01-1.8 1.8c-6.628 0-12-5.373-12-12A1.8 1.8 0 019 18a8.4 8.4 0 008.4 8.4 1.8 1.8 0 011.8 1.8zM1.8 19.201a1.8 1.8 0 01-1.8-1.8c0-6.627 5.373-12 12-12a1.8 1.8 0 010 3.6 8.4 8.4 0 00-8.4 8.4 1.8 1.8 0 01-1.8 1.8zM28.2 10.798a1.8 1.8 0 011.8 1.8c0 6.628-5.372 12-12 12a1.8 1.8 0 110-3.6 8.4 8.4 0 008.4-8.4 1.8 1.8 0 011.8-1.8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgElement2;
