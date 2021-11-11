import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import useScrollListener from '../../hooks/use-scroll-listener';
import Icon from '../default/Icon';
import { Link } from '../default/Link';

const Banner = () => {
  const scroll = useScrollListener();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scroll.y > 300) {
      setIsScrolled(true);
    } else if (scroll.y < 1) {
      setIsScrolled(false);
    }
  }, [scroll.y]);

  return (
    <div
      className={cx(
        'hidden md:block fixed z-50 right-8 bottom-8 max-w-xs p-4 transition-opacity bg-substrateGray-light dark:bg-substrateGray-darkest m-0 shadow-xxl rounded-md',
        {
          'opacity-0': isScrolled,
        }
      )}
    >
      <Icon name="stack-overflow-2" className="h-8 w-8 mb-4" />
      <p className="mb-0 underline-animate underline-animate-thin">
        <span className="font-bold">Substrate is campaigning</span> to get its own StackExchange Community created.
        Please help us{' '}
        <Link to="https://area51.stackexchange.com/proposals/126136/substrate-blockchain-framework">here.</Link>
      </p>
    </div>
  );
};

export default Banner;
