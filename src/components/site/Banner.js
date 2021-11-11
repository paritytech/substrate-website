import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import useScrollListener from '../../hooks/use-scroll-listener';
import { Link } from '../default/Link';

const Banner = () => {
  const scroll = useScrollListener();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scroll.y > 30) {
      setIsScrolled(true);
    } else if (scroll.y < 1) {
      setIsScrolled(false);
    }
  }, [scroll.y]);

  return (
    <div
      className={cx('bg-substrateGray-light transition-all dark:bg-substrateBlackish m-0', {
        '-mt-24': isScrolled,
      })}
    >
      <p className="text-center py-3 px-4 mb-0 underline-animate underline-animate-thin">
        Substrate is campaigning to get its own StackExchange Community created. Please help us{' '}
        <Link to="https://link.com">here.</Link>
      </p>
    </div>
  );
};

export default Banner;
