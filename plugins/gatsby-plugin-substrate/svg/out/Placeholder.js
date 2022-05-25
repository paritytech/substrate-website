import * as React from 'react';

function SvgPlaceholder(props) {
  return (
    <svg width={80} height={80} fill="none" {...props}>
      <path fill="#DFE2E6" d="M0 0h80v80H0z" />
    </svg>
  );
}

export default SvgPlaceholder;
