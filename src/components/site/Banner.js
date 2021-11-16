import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { useBanner } from '../../hooks/use-banner';
import useScrollListener from '../../hooks/use-scroll-listener';
import Icon from '../default/Icon';

const Banner = () => {
  const scroll = useScrollListener();
  const [isScrolled, setIsScrolled] = useState(false);
  const { banner } = useBanner();

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
        'hidden md:block fixed z-50 right-10 bottom-8 max-w-sm p-6 transition-all text-white dark:text-black dark:bg-substrateGray bg-substrateBlackish m-0 shadow-xxl rounded-md',
        {
          'opacity-0 -z-10': isScrolled,
        }
      )}
    >
      <div className="flex">
        <Icon name="stack-overflow-2" className="h-8 w-8 mb-4" />
        <Icon name="substrate" className="w-44 h-10 ml-3 fill-current dark:text-substrateDark text-substrateWhite" />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: banner }}
        className="banner underline-animate underline-animate-thin"
      ></div>
    </div>
  );
};

export default Banner;
