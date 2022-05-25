import * as React from 'react';

function SvgLogoMoonbeam(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" width={80} height={80} fill="none" {...props}>
      <path fill="url(#logo-moonbeam_svg__pattern0)" d="M0 0h80v80H0z" />
      <defs>
        <pattern id="logo-moonbeam_svg__pattern0" width={1} height={1} patternContentUnits="objectBoundingBox">
          <use transform="scale(.00195)" xlinkHref="#logo-moonbeam_svg__image0" />
        </pattern>
      </defs>
    </svg>
  );
}

export default SvgLogoMoonbeam;
