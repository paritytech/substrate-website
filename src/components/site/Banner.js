import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { useBanner } from '../../hooks/use-banner';
import { useSessionStorage } from '../../hooks/use-session-storage';
import Icon from '../default/Icon';

const Banner = () => {
  const [renderBanner, setRenderBanner] = useState(null);
  const { isBannerOpen, setIsBannerOpen } = useSessionStorage('banner', true);

  const banners = useBanner();

  useEffect(() => {
    setRenderBanner(isBannerOpen);
  }, [isBannerOpen]);

  return (
    <>
      {renderBanner && (
        <div
          className={cx(
            'hidden md:block fixed z-50 right-10 bottom-8 max-w-sm p-6 transition-all text-white dark:text-black dark:bg-substrateGray bg-substrateBlackish m-0 shadow-xxl rounded-md'
          )}
        >
          {banners.map(
            (
              {
                node: {
                  html,
                  frontmatter: { title },
                },
              },
              idx
            ) => (
              <div key={idx}>
                {idx !== 0 && <div className="h-0.5 my-2 bg-substrateDarkThemeGrey dark:bg-substrateSubtleGrey"></div>}
                <h4 className="mb-2 font-bold text-2xl">{title}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: html }}
                  className="banner underline-animate underline-animate-thin"
                ></div>
              </div>
            )
          )}

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
