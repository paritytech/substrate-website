import React from 'react';

import { Link } from '../default/Link';

const PrimaryButton = ({ children, link }) => {
  return (
    <Link to={link}>
      <div className="bg-substrateGreen px-5 py-2 inline-block rounded-md hover:opacity-80 transition-opacity">
        <p className="text-bold text-white mb-0">{children}</p>
      </div>
    </Link>
  );
};

export default PrimaryButton;
