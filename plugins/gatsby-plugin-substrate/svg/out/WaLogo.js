import * as React from 'react';

function SvgWaLogo(props) {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink" width={48} height={48} {...props}>
      <defs>
        <path id="wa-logo_svg__a" d="M0 0h48v48H0z" />
      </defs>
      <clipPath id="wa-logo_svg__b">
        <use overflow="visible" xlinkHref="#wa-logo_svg__a" />
      </clipPath>
      <path
        d="M29.5 0v.3c0 3-2.5 5.5-5.5 5.5S18.5 3.3 18.5.3V0H0v48h48V0H29.5zm-6.6 42.9l-2.3-11.6h-.1L18 42.9h-3.2l-3.6-17h3.2l2.2 11.6 2.6-11.6h3l2.4 11.7L27 25.9h3.1l-4.1 17h-3.1zm17.5 0l-1.1-3.8h-5.7l-.8 3.8h-3.2l4.1-17h5l5 17h-3.3z"
        clipPath="url(#wa-logo_svg__b)"
      />
      <path d="M35.6 30.1l-1.4 6.2h4.4L37 30.1z" clipPath="url(#wa-logo_svg__b)" />
    </svg>
  );
}

export default SvgWaLogo;
