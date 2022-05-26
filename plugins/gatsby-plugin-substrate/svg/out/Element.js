import * as React from 'react';

function SvgElement(props) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#fff"
        d="M9 23.5C9 24.3286 9.67143 25 10.5 25 16.0214 25 20.5 20.5214 20.5 15 20.5 14.1714 19.8286 13.5 19 13.5 18.1714 13.5 17.5 14.1714 17.5 15 17.5 18.8643 14.3643 22 10.5 22 9.67143 22 9 22.6714 9 23.5zM16 1.5C16 .67143 15.3286 9.53674e-7 14.5 9.53674e-7 8.97857 9.53674e-7 4.5 4.47857 4.5 10 4.5 10.8286 5.17143 11.5 6 11.5 6.82857 11.5 7.5 10.8286 7.5 10 7.5 6.13571 10.6357 3 14.5 3 15.3286 3 16 2.32857 16 1.5zM1.5 8.99999C.671429 8.99999 0 9.67142 0 10.5 0 16.0214 4.47857 20.5 10 20.5 10.8286 20.5 11.5 19.8286 11.5 19 11.5 18.1714 10.8286 17.5 10 17.5 6.13571 17.5 3 14.3643 3 10.5 3 9.67142 2.32857 8.99999 1.5 8.99999zM23.5 16C24.3286 16 25 15.3286 25 14.5 25 8.97856 20.5214 4.49998 15 4.49998 14.1714 4.49998 13.5 5.17141 13.5 5.99999 13.5 6.82856 14.1714 7.49999 15 7.49999 18.8643 7.49999 22 10.6357 22 14.5 22 15.3286 22.6714 16 23.5 16z"
      />
    </svg>
  );
}

export default SvgElement;
