import cn from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import HubspotForm from 'react-hubspot-form';

import { Icon } from '../default/Icon';
import { Link } from '../default/Link';

export function Newsletter({ layout = 'default', iconsMap = {} }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const FORM_ID = 'd48f3940-0c86-4493-978b-31c5c7047b8e';

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
        {!widget && (
          <Icon IconComponent={iconsMap['paperplane']} className="h-7 w-7 mb-4 mr-4 fill-current text-white" />
        )}
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
        <div className={!widget && 'lg:grid lg:grid-cols-3 max-w-[1380px]'}>
          <p className="mb-6 font-semibold text-lg max-w-lg lg:max-w-7xl">
            Subscribe for the latest news, technical updates and helpful developer resources.
          </p>
          <div id="hs-newsletter-form" className={widget ? 'widget' : ''}>
            <HubspotForm portalId="7592558" formId={FORM_ID} />
            <p className={cn('mb-6 text-sm mt-4 m-auto', { 'mb-0 lg:max-w-sm lg:text-center': !widget })}>
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
            {!widget && (
              <Icon IconComponent={iconsMap['check-mark']} className="flex-shrink-0 h-7 w-7 mb-4 mr-4 rounded-full" />
            )}
            <p className="font-semibold text-lg ml-0.5">
              To complete the subscription process, please click the link in the email we just sent you.
            </p>
          </div>
          <p className="text-sm">
            For more news, follow{' '}
            <span className="underline-animate underline-animate-thin">
              <Link to="https://twitter.com/substrate_io">@substrate_io</Link>
            </span>{' '}
            on Twitter.
          </p>
        </div>
      )}
    </div>
  );
}
