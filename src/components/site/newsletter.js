import cn from 'classnames';
import React, { useState } from 'react';

import { useSiteMetadata } from '../../hooks/use-site-metadata';
import Icon from '../default/Icon';
import { Link } from '../default/Link';

export default function Newsletter({ widget = false }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { siteMetadata } = useSiteMetadata();

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.target);
    fetch('https://paritytechnologies.activehosted.com/proc.php', {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    })
      .then(response => {
        setLoading(false);
        console.log(response);
        setFormSubmitted(!formSubmitted);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 15000);
      })
      .catch(error => {
        setLoading(false);
        console.log('Request failed', error);
      });
  };

  return (
    <>
      {!formSubmitted && (
        <div
          className={cn('w-full border-b-2 border-gray-600', {
            ' pt-0 pb-0 border-b-0': widget,
            'pt-12 pb-8': !widget,
          })}
        >
          <div className="flex items-center">
            {!widget && <Icon name="paperplane" className="mb-4 mr-4 fill-current text-white" />}
            <h2
              className={cn('font-bold mb-4', {
                'text-2xl': !widget,
                'text-4xl': widget,
              })}
            >
              Newsletter
            </h2>
          </div>
          <div className={cn('', { 'lg:grid lg:grid-cols-3 gap-6': !widget })}>
            <p className="font-semibold text-lg max-w-lg lg:max-w-7xl">
              Subscribe for the latest news, technical updates and helpful developer resources.
            </p>
            <form className="col-span-2" onSubmit={event => handleSubmit(event)}>
              <input type="hidden" name="u" value="11" />
              <input type="hidden" name="f" value="11" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <div className={cn('', { 'lg:flex gap-6': !widget })}>
                <input
                  className={cn(
                    'w-full flex-1 mb-6 border-3 rounded-lg border-black text-bodyBg text-xl p-4 focus:outline-none hover:ring-2 focus:ring-2 text-center',
                    {
                      'bg-substrateBlackish border-white text-white max-w-sm h-12': !widget,
                      'dark:bg-substrateDarkest dark:border-substrateGray-dark text-black dark:text-white max-w-lg h-16':
                        widget,
                    }
                  )}
                  type="email"
                  name="email"
                  placeholder={!widget ? 'Type your Email Address' : 'Email Address'}
                  required
                />
                <div
                  className={cn('lg:w-lg flex-1', {
                    'max-w-sm': !widget,
                    'max-w-lg': widget,
                  })}
                >
                  <button
                    className={cn(
                      'w-full bg-substrateGreen hover:bg-white text-white hover:text-substrateGreen align-items mb-4 px-9 text-xl font-bold transition duration-200 focus:outline-none focus:ring-2 rounded-lg border-3 border-substrateGreen',
                      {
                        'h-16': widget,
                        'h-12': !widget,
                      }
                    )}
                    type="submit"
                    value="Submit"
                    onSubmit={event => handleSubmit(event)}
                  >
                    {loading ? 'Sending...' : 'Subscribe'}
                  </button>
                  <p className={cn('text-sm', { ' lg:text-center': !widget })}>
                    To see how we use your information please see our{' '}
                    <span className="underline-animate underline-animate-thin">
                      <Link to="https://www.parity.io/privacy/">privacy policy</Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {formSubmitted && (
        <div className={cn('w-full', { 'pt-12 pb-16 border-b-2 border-gray-600': !widget })}>
          <div className="flex items-center">
            {!widget && <Icon name="paperplane" className="mb-4 mr-4 fill-current text-white" />}
            <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
          </div>
          <div className="flex">
            {!widget && <Icon data-aos="fade" name="check-mark" className="h-7 w-7 mb-4 mr-5 rounded-full" />}
            <p className="font-bold text-lg">
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
    </>
  );
}
