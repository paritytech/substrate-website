import { useEffect, useState } from 'react';

import { isBrowser } from '../utils/browser';

function getSessionStorageOrDefault(key, initialValue) {
  const stored = isBrowser && window.sessionStorage.getItem(key);
  if (!stored) {
    return initialValue;
  }
  return JSON.parse(stored);
}

export const useSessionStorage = (key, initialValue) => {
  const [isBannerOpen, setIsBannerOpen] = useState(getSessionStorageOrDefault(key, initialValue));

  useEffect(() => {
    window.sessionStorage.setItem('banner', JSON.stringify(isBannerOpen));
  }, [isBannerOpen]);

  return { isBannerOpen, setIsBannerOpen };
};
