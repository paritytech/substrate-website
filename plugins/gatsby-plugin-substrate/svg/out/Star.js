import * as React from 'react';

function SvgStar(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 22" {...props}>
      <path
        fillRule="evenodd"
        d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zM8.845 8.454l1.497-3.186a.719.719 0 011.315 0l1.497 3.186 3.348.513c.6.091.84.868.405 1.313l-2.422 2.479.573 3.5c.103.634-.532 1.105-1.063.812l-2.996-1.653-2.995 1.653c-.531.296-1.166-.178-1.063-.811l.573-3.501-2.422-2.479c-.436-.445-.195-1.222.405-1.313l3.348-.513z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStar;
