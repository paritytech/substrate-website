import cx from 'classnames';
import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const cards = [
  {
    title: 'Flexible',
    link: '/technology/flexible',
    description: `The flexible nature of Substrate alleviates the tension of tradeoffs by enabling developers to create the most optimal blockchain for their specific needs.`,
  },
  {
    title: 'Open',
    link: '/technology/open',
    description: `The combination of an open source, customizable architecture that enables developers to use the tooling of their choice with a robust, active community makes Substrate the most open way to build.`,
  },
  {
    title: 'Interoperable',
    link: '/technology/interoperable',
    description: `Interoperability without forgoing compatibility, security, or efficiency; learn how Substrate takes a unique, multifaceted approach to address each of these.`,
  },
  {
    title: 'Future-Proof',
    link: '/technology/future-proof',
    description: `Substrate enables developers to move faster and evolve their architecture as their needs evolve. Founders and Developers can be confident that their blockchain is ready for whatever the future brings.`,
  },
];

const Card = ({ page, delay, mode, image }) => {
  const { link, title, description } = cards.find(card => card.title === page);

  return (
    <Link to={link} data-aos="fade-up" data-aos-delay={delay ? delay : 0}>
      <div
        className={cx(
          'overflow-hidden md:flex min-h-full mb-8 lg:mb-0 m:max-w-sm cursor-pointer shadow-xl p-0 hover:scale-105 transition-transform rounded-md bg-white dark:bg-substrateBlackish relative',
          {
            'lg:block lg:w-72 xl:w-96 lg:mr-8': mode === 'vertical',
          }
        )}
      >
        <div className="self-center md:order-2 w-1/2 pt-8 pl-8 md:p-0 justify-self-end flex-none">
          <Icon name={image} className={cx('md:w-full h-auto', { 'lg:mb-6': mode === 'vertical' })} />
        </div>
        <div className="flex flex-col md:w-2/3 flex-none justify-between p-8 md:order-1">
          <div className={cx('lg:pb-6', { 'lg:mr-0': mode === 'vertical' })}>
            <h3 className="mb-5 text-3xl font-bold">{title}</h3>
            <p className="mb-6">{description}</p>
          </div>
          <div className="absolute bottom-8">
            <p className="font-bold border-b-2 border-black dark:border-white inline hover:mr-1 transition-all">
              Read More
            </p>{' '}
            <span className="fill-current border-b-0 text-black dark:text-white inline-block">
              <Icon name="arrow-more" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
