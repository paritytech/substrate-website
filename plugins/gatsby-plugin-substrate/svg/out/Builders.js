import * as React from 'react';

function SvgBuilders(props) {
  return (
    <svg width={45} height={40} fill="none" viewBox="0 0 45 40" {...props}>
      <path fill="#24CC85" d="M37.57 0H7.431l23.12 18.627L37.568 0z" />
      <path fill="#D4F9EC" d="M7.431 0L0 12.027 22.5 40l8.05-21.373L7.432 0z" />
      <path fill="#0E8F59" d="M37.569 0L30.55 18.627 22.5 40 45 12.027 37.57 0z" />
    </svg>
  );
}

export default SvgBuilders;
