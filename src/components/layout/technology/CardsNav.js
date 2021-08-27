import React from 'react';

import Section from '../Section';
import Card from './Card';

const pages = ['Flexible', 'Open', 'Interoperable', 'Future-Proof'];

const CardsNav = ({ currentPage }) => {
  return (
    <Section>
      <div className="relative">
        <div className="hidden lg:block absolute h-80 w-1/2 bg-gray-200 -right-4 z-0"></div>
        <h2 className="text-3xl md:text-4xl mb-10 py-10 relative">Learn More About Our Technology</h2>
        <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:flex flex-col lg:flex-row z-10">
          {pages
            .filter(page => page != currentPage)
            .map((page, idx) => (
              <Card key={idx} page={page} delay={idx * 200} mode="vertical" />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default CardsNav;
