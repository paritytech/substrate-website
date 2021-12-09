import { useEffect, useState } from 'react';

import { isBrowser } from '../utils/browser';

function getSessionStorageOrDefault(key) {
  const stored = isBrowser && window.sessionStorage.getItem(key);
  if (!stored) {
    return true;
  }
  return JSON.parse(stored);
}

export const useSessionStorage = key => {
  const [isBannerOpen, setIsBannerOpen] = useState(getSessionStorageOrDefault(key));

  useEffect(() => {
    window.sessionStorage.setItem('banner', JSON.stringify(isBannerOpen));
  }, [isBannerOpen]);

  return { isBannerOpen, setIsBannerOpen };
};
