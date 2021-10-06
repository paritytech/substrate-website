import React from 'react';

import Icon from '../../default/Icon';
import Section from '../Section';
import Card from './Card';

const pages = ['Flexible', 'Open', 'Interoperable', 'Future Proof'];

const CardsNav = ({ heading, currentPage }) => {
  return (
    <div className="w-screen max-w-full overflow-x-hidden">
      <Section>
        <div className="relative">
          <Icon name="diamond-green" className="hidden md:block absolute opacity-20 right-0 w-1/3" />
          <h2 className="text-3xl font-bold md:text-4xl mb-10 py-4 relative">{heading}</h2>
          <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:flex flex-col lg:flex-row z-10">
            {pages
              .filter(page => page != currentPage)
              .map((page, idx) => (
                <Card key={idx} page={page} delay={idx * 200} mode="vertical" />
              ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CardsNav;
