import * as React from 'react';

function SvgTwitter2(props) {
  return (
    <svg width={30} height={30} fill="none" viewBox="0 0 30 30" {...props}>
      <g clipPath="url(#twitter2_svg__clip0)">
        <path
          fill="#1DA1F2"
          d="M30 5.696c-1.104.49-2.29.82-3.535.97a6.164 6.164 0 002.706-3.406 12.329 12.329 0 01-3.909 1.494A6.145 6.145 0 0020.77 2.81c-3.974 0-6.894 3.708-5.996 7.556a17.473 17.473 0 01-12.685-6.43 6.163 6.163 0 001.904 8.218 6.128 6.128 0 01-2.787-.77c-.067 2.851 1.977 5.519 4.936 6.112a6.17 6.17 0 01-2.78.105 6.16 6.16 0 005.75 4.274A12.376 12.376 0 010 24.425a17.424 17.424 0 009.435 2.765c11.428 0 17.884-9.651 17.494-18.307A12.531 12.531 0 0030 5.696z"
        />
      </g>
      <defs>
        <clipPath id="twitter2_svg__clip0">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgTwitter2;
