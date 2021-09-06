import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';
import Section from '../Section';

const links = [
  {
    image: 'placeholder',
    title: 'Teams',
    description:
      'Build a customized Substrate chain with its own user interface.Create flexible runtime library. Configure transaction Queue',
    link: '/technology',
  },
  {
    image: 'placeholder',
    title: 'Docs',
    description:
      'Build a customized Substrate chain with its own user interface.Create flexible runtime library. Configure transaction Queue',
    link: '/technology',
  },
  {
    image: 'placeholder',
    title: 'Ecosystem',
    description:
      'Build a customized Substrate chain with its own user interface.Create flexible runtime library. Configure transaction Queue',
    link: '/technology',
  },
];

const ExploreLinkSection = () => {
  return (
    <div className="bg-substrateGray dark:bg-substrateDarkest pb-10 pt-20">
      <Section>
        <h4 className="text-2xl font-bold mb-16">Explore More Substrate</h4>
        <div className="sm:grid grid-cols-3 gap-6 xl:gap-24">
          {links.map(({ image, title, description, link }, index) => (
            <div key={index} className="mb-16 sm:mb-0">
              <Icon name={image} className="mb-6" />
              <h5 className="text-xl font-bold mb-6">{title}</h5>
              <p>{description}</p>
              <Link to={link}>
                <p className="font-bold border-b-2 border-black inline hover:mr-1 transition-all">Explore</p>{' '}
                <span className="fill-current border-b-0 dark:text-white inline-block">
                  <Icon name="arrow-more" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ExploreLinkSection;
