import * as React from 'react';

function SvgDate(props) {
  return (
    <svg width={16} height={18} viewBox="0 0 16 18" {...props}>
      <path d="M13.833 2.333H13V.667h-1.667v1.666H4.667V.667H3v1.666h-.833A1.66 1.66 0 00.508 4L.5 15.666c0 .917.742 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.666V4c0-.917-.75-1.667-1.667-1.667zm0 13.334H2.167V7.332h11.666v8.333zm0-10H2.167V4h11.666v1.667zM8 9.832h4.167V14H8V9.833z" />
    </svg>
  );
}

export default SvgDate;
