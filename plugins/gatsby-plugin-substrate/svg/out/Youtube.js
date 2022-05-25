import * as React from 'react';

function SvgYoutube(props) {
  return (
    <svg width={43} height={30} fill="none" {...props}>
      <path
        fill="red"
        d="M42.114 4.694a5.378 5.378 0 00-3.79-3.776C34.96 0 21.5 0 21.5 0S8.04 0 4.675.882C2.87 1.376 1.381 2.86.885 4.694 0 8.047 0 15 0 15s0 6.988.885 10.306a5.378 5.378 0 003.79 3.776C8.075 30 21.5 30 21.5 30s13.46 0 16.824-.882a5.378 5.378 0 003.79-3.777C43 21.988 43 15.035 43 15.035s.035-6.988-.886-10.34z"
      />
      <path fill="#fff" d="M28.407 15L17.214 8.577v12.847L28.407 15z" />
    </svg>
  );
}

export default SvgYoutube;
