import React from 'react';

import { Link } from '../default/Link';

const SecondaryButton = ({ children, link }) => {
  return (
    <Link to={link}>
      <div className=" bg-substrateBlackish px-5 py-2 inline-block rounded-md hover:opacity-80 transition-opacity">
        <p className="text-bold text-white mb-0">{children}</p>
      </div>
    </Link>
  );
};

export default SecondaryButton;
