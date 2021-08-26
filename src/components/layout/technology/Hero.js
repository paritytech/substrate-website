import cx from 'classnames';
import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';
import Section from '../../layout/Section';

const pages = [
  {
    title: 'Overview',
    link: '/technology',
  },
  {
    title: 'Open',
    link: '/technology/open',
  },
  {
    title: 'Flexible',
    link: '/technology/flexible',
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

const Hero = ({ page, children }) => {
  return (
    <div className="bg-substrateGray-light -mt-12 pt-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <div className="self-center max-w-lg">
            <p className="tracking-wider xl:tracking-widest text-lg font-light mb-0 uppercase">Substrate Technology</p>
            <h1 data-aos="fade-up" className="py-6 md:py-10 mb-0 font-extrabold text-6xl lg:text-7xl">
              {page}
            </h1>
            <div className="text-lg">{children}</div>
          </div>
          <Icon name="placeholder" className="hidden md:block w-full h-auto my-10" />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
