import cn from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import HubspotForm from 'react-hubspot-form';

import { useSiteMetadata } from '../../hooks/use-site-metadata';
import Icon from '../default/Icon';
import { Link } from '../default/Link';
import LoadingAnimation from '../ui/LoadingAnimation';

export default function Newsletter({ layout = 'default' }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const FORM_ID = 'd48f3940-0c86-4493-978b-31c5c7047b8e';
  const { siteMetadata } = useSiteMetadata();

  const widget = layout === 'widget';

  useEffect(() => {
    window.addEventListener('message', handler);
    return () => {
      window.removeEventListener('message', handler);
    };
  }, [handler]);

  const handler = useCallback(event => {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
      if (event.data.id === FORM_ID) {
        setFormSubmitted(true);
      }
    }
  }, []);

  return (
    <div
      className={cn('', {
        'lg:min-h-[238px] pt-10 pb-10 w-full border-b-2 border-gray-600': !widget,
        'border-b-0': widget,
      })}
    >
      <div className="flex items-center">
        {!widget && <Icon name="paperplane" className="h-7 w-7 mb-4 mr-4 fill-current text-white" />}
        <h2
          className={cn('font-bold mb-4', {
            'text-2xl': !widget,
            'text-4xl': widget,
          })}
        >
          Newsletter
        </h2>
      </div>
      {!formSubmitted && (
        <div className={!widget && 'flex flex-col lg:flex-row gap-6 max-w-[1345px]'}>
          <p className="mb-6 font-semibold text-lg max-w-lg">
            Subscribe for the latest news, technical updates and helpful developer resources.
          </p>
          <div id="hs-newsletter-form" className={widget ? 'widget' : ''}>
            <HubspotForm
              portalId="7592558"
              formId={FORM_ID}
              loading={
                <div className="py-10 px-10 px-mb-10 h-full">
                  <LoadingAnimation />
                  <p className="text-xs text-center text-gray-400 font-sans">
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
            <p
              className={cn('mb-6 text-sm mt-4 lg:ml-auto', {
                'mb-0 max-w-sm lg:text-center': !widget,
              })}
            >
              To see how we use your information please see our{' '}
              <span className="underline-animate underline-animate-thin">
                <Link to="https://www.parity.io/privacy/">privacy policy</Link>
              </span>
            </p>
          </div>
        </div>
      )}
      {formSubmitted && (
        <div>
          <div className="flex">
            {!widget && <Icon name="check-mark" className="flex-shrink-0 h-7 w-7 mb-4 mr-4 rounded-full" />}
            <p className="font-semibold text-lg ml-0.5">
              To complete the subscription process, please click the link in the email we just sent you.
            </p>
          </div>
          <p className="text-sm">
            For more news, follow{' '}
            <span className="underline-animate underline-animate-thin">
              <Link to={siteMetadata.twitter}>@substrate_io</Link>
            </span>{' '}
            on Twitter.
          </p>
        </div>
      )}
    </div>
  );
}
