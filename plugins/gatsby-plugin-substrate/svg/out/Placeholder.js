import * as React from 'react';

function SvgPlaceholder(props) {
  return (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 80 80" {...props}>
      <path fill="currentColor" d="M0 0h80v80H0z" />
    </svg>
  );
}

export default SvgPlaceholder;
