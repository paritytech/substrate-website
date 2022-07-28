import { Icon, LineArrowButton, Section } from 'gatsby-plugin-substrate';
import React from 'react';

const CaseStudyBanner = ({ icon, children, link }) => {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateBlackish">
      <Section>
        <div className="md:flex flex-row py-8">
          <Icon name={icon} className="md:self-center mb-4 md:mb-0" />
          <div className="md:mx-8">
            <h3 className="text-xl md:text-2xl font-bold">{children}</h3>
            <LineArrowButton link={link}>Case Study</LineArrowButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudyBanner;
