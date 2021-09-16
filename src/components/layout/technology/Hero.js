import cx from 'classnames';
import React from 'react';
import Lottie from 'react-lottie';

import Gif from '../../default/Gif';
import { Link } from '../../default/Link';
import Section from '../../layout/Section';

const pages = [
  {
    title: 'Overview',
    link: '/technology',
  },
  {
    title: 'Flexible',
    link: '/technology/flexible',
  },
  {
    title: 'Open',
    link: '/technology/open',
  },
  {
    title: 'Interoperable',
    link: '/technology/interoperable',
  },
  {
    title: 'Future Proof',
    link: '/technology/future-proof',
  },
];

const Hero = ({ page, image, animation, children }) => {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateBlackish -mt-12 pt-6">
      <Section>
        <ul className="m-0 p-0 hidden list-none md:flex mb-3 text-lg">
          {pages.map(({ title, link }) => {
            const current = title === page;
            return (
              <li key={title} className={cx('m-0 p-0 md:mr-16 lg:mr-24 xl:mr-32')}>
                <Link
                  to={link}
                  className={cx('font-bold hover:text-substrateGreen transition transition-color', {
                    'text-substrateGreen': current,
                  })}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-6">
          <div className="order-1 md:self-end">
            <p className="tracking-wider lg:tracking-widest text-lg font-light mb-0 uppercase">Substrate Technology</p>
            <h1
              data-aos="fade-up"
              className="py-6 lg:py-10 mb-0 font-title font-extrabold text-6xl xl:text-7xl whitespace-nowrap"
            >
              {page}
            </h1>
          </div>
          <div className="order-3 self-start max-w-lg font-medium">{children}</div>
          {image && <Gif name={image} alt={page} className="order-2 lg:row-span-2 w-full h-auto mb-10 mt-4 lg:my-10" />}
          {animation && (
            <div className="order-2 lg:row-span-2 w-full h-auto mb-10 mt-4 lg:my-10">
              <Lottie options={animation} />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Hero;
