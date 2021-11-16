import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { useBanner } from '../../hooks/use-banner';
import useScrollListener from '../../hooks/use-scroll-listener';

const Banner = () => {
  const scroll = useScrollListener();
  const [isScrolled, setIsScrolled] = useState(false);
  const { banner } = useBanner();
  const {
    html,
    frontmatter: { title },
  } = banner;

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
      <h4 className="mb-2 font-bold text-2xl">{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} className="banner underline-animate underline-animate-thin"></div>
    </div>
  );
};

export default Banner;
