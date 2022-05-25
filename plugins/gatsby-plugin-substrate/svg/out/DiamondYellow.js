import * as React from 'react';

function SvgDiamondYellow(props) {
  return (
    <svg width={35} height={40} fill="none" {...props}>
      <path fill="#FECD8B" d="M0 .002L17.5 10l-7.413 12.713L0 .003z" />
      <path fill="#FEEACE" d="M10.087 22.71L17.5 9.999 35 20 17.5 30.002 0 40l10.087-17.29z" />
      <path fill="#FDAB3D" d="M10.087 22.71L0 40V0l10.087 22.71z" />
    </svg>
  );
}

export default SvgDiamondYellow;
