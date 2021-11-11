import React from 'react';

import { Link } from '../default/Link';

const Banner = () => {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateBlackish m-0">
      <p className="text-center py-3 mb-0 underline-animate underline-animate-thin">
        Substrate is campaigning to get its own StackExchange Community created. Please help us{' '}
        <Link to="https://link.com">here.</Link>
      </p>
    </div>
  );
};

export default Banner;
