import React from 'react';

import Section from '../Section';
import VerticalCard from './VerticalCard';

const cards = [
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
  {
    title: 'Flexible',
    link: '/technology/flexible',
    description:
      'The flexible nature of Substrate alleviates the tension of tradeoffs by enabling developers to create the most optimal blockchain for their specific needs.',
  },
];

const CardsNav = ({ page }) => {
  return (
    <Section>
      <div className="relative">
        <div className="hidden lg:block absolute h-80 w-1/2 bg-gray-200 -right-4 z-0"></div>
        <h2 className="text-3xl md:text-4xl mb-10 py-10 relative">Learn More About Our Technology</h2>
        <div className="flex flex-col lg:flex-row z-10">
          {cards
            .filter(({ title }) => title !== page)
            .map(({ title, link, description }, index) => (
              <VerticalCard title={title} link={link} index={index} key={index}>
                {description}
              </VerticalCard>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default CardsNav;
