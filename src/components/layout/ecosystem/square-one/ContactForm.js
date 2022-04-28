import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import HubspotForm from 'react-hubspot-form';

import LoadingAnimation from '../../../ui/LoadingAnimation';

export default function ContactForm({ connect }) {
  const FORM_ID = '3118b3cd-6a6a-4f38-8982-3374284ffcb5';

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.addEventListener('message', handler);
    return () => {
      window.removeEventListener('message', handler);
    };
  }, []);

  const handler = event => {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
      if (event.data.id === FORM_ID) {
        onSubmit();
      }
    }
  };

  const onSubmit = () => {
    setFormSubmitted(true);
    connect.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        id="hubspotForm"
        className={cx('grid items-center transition-height duration-500', {
          'h-[940px] md:h-[924px]': !formSubmitted,
          'h-[360px]': formSubmitted,
        })}
      >
        {!formSubmitted ? (
          <HubspotForm
            portalId="7592558"
            formId={FORM_ID}
            loading={
              <div className="py-40 md:py-40 md:px-10 px-mb-10">
                <LoadingAnimation />
                <p className="mt-20 text-xs text-center text-gray-400 font-sans">
                  If the content does not appear correctly, <br />
                  follow this{' '}
                  <a
                    href="https://share.hsforms.com/1MRizzWpqTziJgjN0KE_8tQ4iqge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    link
                  </a>
                  .
                </p>
              </div>
            }
          />
        ) : (
          <Confirmation />
        )}
      </div>
    </>
  );
}

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <div className="h-24 w-24 mt-16 mb-16 bg-substrateGreen rounded-full flex items-center justify-center">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
      <p className="text-2xl font-bold mb-2">Thanks for reaching out</p>
      <p className="mb-20">We will get back to you as soon as possible.</p>
    </div>
  );
};
