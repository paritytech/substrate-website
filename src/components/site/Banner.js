import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { useBanner } from '../../hooks/use-banner';
import { isBrowser } from '../../utils/browser';
import Icon from '../default/Icon';

function getSessionStorageOrDefault(key, defaultValue) {
  if (isBrowser) {
    const stored = window.sessionStorage.getItem(key);
    if (!stored) return defaultValue;
    return JSON.parse(stored);
  }

  return defaultValue;
}

const Banner = () => {
  const banner = useBanner();
  const {
    node: {
      html,
      frontmatter: { title },
    },
  } = banner;

  const [isBannerOpen, setIsBannerOpen] = useState(getSessionStorageOrDefault('banner', true));

  useEffect(() => {
    if (isBrowser) {
      window.sessionStorage.setItem('banner', JSON.stringify(isBannerOpen));
    }
  }, [isBannerOpen]);

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
