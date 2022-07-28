import cx from 'classnames';
import { Icon, LineArrowButton, Link } from 'gatsby-plugin-substrate';
import React from 'react';

const cards = [
  {
    title: 'Flexible',
    link: '/technology/flexible/',
    description: `Substrate's flexibility alleviates the tension of tradeoffs by enabling developers to create the optimal blockchain for their specific needs.`,
    icon: 'flexible',
  },
  {
    title: 'Open',
    link: '/technology/open/',
    description: `The combination of an open-source, customizable architecture, rich tooling and a robust, active community makes Substrate the most open way to build.`,
    icon: 'open',
  },
  {
    title: 'Interoperable',
    link: '/technology/interoperable/',
    description: `Interoperability without foregoing compatibility, security, or efficiency; learn how Substrate takes a unique, multifaceted approach to address each of these factors.`,
    icon: 'interoperable',
  },
  {
    title: 'Future-Proof',
    link: '/technology/future-proof/',
    description: `Substrate enables developers to change their architecture as their needs evolve, ensuring that their blockchain network is ready for whatever the future brings. `,
    icon: 'future-proof',
  },
];

const Card = ({ page, delay, mode }) => {
  const { link, title, description, icon } = cards.find(card => card.title === page);

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
        <div
          className={cx('self-center md:order-2 w-1/3 md:w-full pt-8 pl-8 md:p-8 justify-self-end lg:flex-none', {
            'lg:px-8 lg:py-4': mode === 'vertical',
            'lg:p-0 lg:w-1/2': mode === 'horizontal',
          })}
        >
          <Icon name={icon} className={cx('md:w-full h-auto', { 'xl:px-4': mode === 'vertical' })} />
        </div>
        <div
          className={cx('flex flex-col lg:flex-none justify-between p-8 pt-2 md:pt-8 md:order-1', {
            'lg:w-full md:pt-4': mode === 'vertical',
            'lg:w-2/3 lg:pr-4': mode === 'horizontal',
          })}
        >
          <div className={cx('lg:pb-6', { 'lg:mr-0': mode === 'vertical' })}>
            <h3 className="mb-5 text-3xl font-bold">{title}</h3>
            <p className="mb-6">{description}</p>
          </div>
          <div className="absolute bottom-8">
            <LineArrowButton>Read more</LineArrowButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
