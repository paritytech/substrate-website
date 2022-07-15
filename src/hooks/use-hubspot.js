import { useCallback, useEffect, useRef, useState } from 'react';

const useHubspot = formId => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);
  const hubspotFormRef = useRef(null);

  const handler = useCallback(
    event => {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        if (event.data.id === formId) {
          setFormSubmitted(true);
        }
      }
    },
    [formId]
  );

  useEffect(() => {
    if (!isFormReady) return;
    // remove novalidate attribute from form so we get default browser error popup
    hubspotFormRef.current.el.firstChild.removeAttribute('novalidate');
  }, [isFormReady]);

  useEffect(() => {
    window.addEventListener('message', handler);
    return () => {
      window.removeEventListener('message', handler);
    };
  }, [handler]);

  const onFormReady = useCallback(() => {
    setIsFormReady(true);
  }, []);

  return { formSubmitted, isFormReady, hubspotFormRef, onFormReady };
};

export { useHubspot };
