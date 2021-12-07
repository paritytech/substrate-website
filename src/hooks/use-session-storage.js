import { useEffect, useState } from 'react';

function isBrowser() {
  return typeof window !== 'undefined';
}

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = isBrowser() && window.sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(getSessionStorageOrDefault(key, defaultValue));

  useEffect(() => {
    isBrowser() && window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
