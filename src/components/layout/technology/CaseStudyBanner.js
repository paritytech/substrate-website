import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';
import Section from '../Section';

const CaseStudyBanner = ({ children, link }) => {
  return (
    <div className="bg-substrateGray">
      <Section>
        <div className="md:flex flex-row py-8">
          <Icon name="placeholder" className="md:self-center mb-4 md:mb-0" />
          <div className="md:mx-8">
            <h3 className="text-xl md:text-2xl font-bold">{children}</h3>
            <Link to={link}>
              <p className="font-bold border-b-2 border-black inline">Explore Case Study</p>{' '}
              <span className="fill-current border-b-0 text-black dark:text-white inline-block">
                <Icon name="arrow-more" />
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudyBanner;
