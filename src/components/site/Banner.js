import cx from 'classnames';
import React from 'react';

import { useBanner } from '../../hooks/use-banner';
import { useSessionStorage } from '../../hooks/use-session-storage';
import Icon from '../default/Icon';

const Banner = () => {
  const { isBannerOpen, setIsBannerOpen } = useSessionStorage('banner');

  const banner = useBanner();
  const {
    html,
    frontmatter: { title },
  } = banner[0].node;

  return (
    <>
      {isBannerOpen && (
        <div
          className={cx(
            'hidden md:block fixed z-50 right-10 bottom-8 max-w-sm p-6 transition-all text-white dark:text-black dark:bg-substrateGray bg-substrateBlackish m-0 shadow-xxl rounded-md'
          )}
        >
          <h4 className="mb-2 font-bold text-2xl">{title}</h4>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="banner underline-animate underline-animate-thin"
          ></div>

          <div
            className="absolute right-4 top-4 cursor-pointer duration-150 ease-in-out hover:scale-110"
            onClick={() => setIsBannerOpen(false)}
          >
            <Icon name="close-x" className="fill-current h-4 w-4" />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
