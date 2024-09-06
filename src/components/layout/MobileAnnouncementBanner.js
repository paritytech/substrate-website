import React from 'react';

/**
 * An announcement banner at the top of the page,
 * that only shows up on mobile resolutions.
 *
 * Can be used as a counterpart to
 * [thise desktop banners](https://github.com/paritytech/substrate-website-banner).
 */
export default function MobileAnnouncementBanner({ children }) {
  return (
    <>
      <div className="md:hidden sticky top-0 relative isolate flex sticky items-center justify-center gap-x-6 overflow-hidden bg-gray-50 dark:bg-gray-600 px-3 py-2.5 sm:px-3.5 sm:before:flex-1">
        {children}
      </div>
    </>
  );
}

export function SDKAnnouncementBanner() {
  return (
    <MobileAnnouncementBanner>
      <div className="text-sm leading-6 text-gray-900 dark:text-white">
        <strong className="font-semibold">Substrate</strong> is part of Polkadot&nbsp;SDK!&nbsp;
      </div>
      <a
        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        href="https://docs.substrate.io/polkadot-sdk"
      >
        Discover&nbsp;→
      </a>
    </MobileAnnouncementBanner>
  );
}
