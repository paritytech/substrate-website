import React from 'react';

import { Link } from '../default/Link';

const SecondaryButton = ({ text, link }) => {
  return (
    <Link to={link}>
      <div className="bg-black px-4 py-2 inline-block rounded-md">
        <p className="text-bold text-white mb-0">{text}</p>
      </div>
    </Link>
  );
};

export default SecondaryButton;
