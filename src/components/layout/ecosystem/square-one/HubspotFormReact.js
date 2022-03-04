import React from 'react';
import HubspotForm from 'react-hubspot-form';

import LoadingAnimation from '../../../ui/LoadingAnimation';

export default function HubspotFormReact() {
  return (
    <>
      <div id="hubspotForm">
        <HubspotForm
          portalId="7592558"
          formId="3118b3cd-6a6a-4f38-8982-3374284ffcb5"
          onSubmit={() => console.log('Submit!')}
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
      </div>
    </>
  );
}
