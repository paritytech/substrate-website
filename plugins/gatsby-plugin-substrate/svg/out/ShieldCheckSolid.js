import * as React from 'react';

function SvgShieldCheckSolid(props) {
  return (
    <svg width={46} height={46} fill="none" viewBox="0 0 46 46" {...props}>
      <g clipPath="url(#shield-check-solid_svg__clip0)">
        <path
          fill="#24CC85"
          d="M41.912 7.52L24.662.334a5.15 5.15 0 00-1.657-.332c-.477 0-1.217.15-1.658.332L4.097 7.521c-1.608.664-2.66 2.236-2.66 3.898C1.438 34.608 18.436 46 22.991 46c4.6 0 21.572-11.518 21.572-34.58 0-1.663-1.052-3.235-2.65-3.9zM31.625 17.97c0 .497-.17.996-.52 1.403l-8.624 10.063c-.604.708-1.404.672-1.637.672a2.16 2.16 0 01-1.525-.632l-4.312-4.313c-.425-.338-.632-.895-.632-1.524a2.157 2.157 0 013.68-1.525l2.668 2.668 7.11-8.296a2.155 2.155 0 011.638-.752c1.65.08 2.154 1.57 2.154 2.236z"
        />
      </g>
      <defs>
        <clipPath id="shield-check-solid_svg__clip0">
          <path fill="#fff" d="M0 0h46v46H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgShieldCheckSolid;
