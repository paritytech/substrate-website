import * as React from 'react';

function SvgMap(props) {
  return (
    <svg width={30} height={24} fill="none" viewBox="0 0 30 24" {...props}>
      <path d="M0 4.795v18.037c0 .59.595.993 1.143.774l7.19-3.273v-20L1.048 3.247A1.667 1.667 0 000 4.795zm10 15.538l10 3.334v-20L10 .333v20zM28.857.393l-7.19 3.274v20l7.285-2.914A1.667 1.667 0 0030 19.205V1.168a.833.833 0 00-1.143-.774z" />
    </svg>
  );
}

export default SvgMap;
