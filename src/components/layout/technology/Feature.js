import cx from 'classnames';
import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';
import Section from '../Section';

const Feature = ({
  featureNum: { title, paragraphOne, paragraphTwo, asides, learnMore, linkText, link, reversed },
}) => {
  return (
    <Section className="md:grid grid-cols-2 gap-8">
      <div className="bg-gray-200 h-80 w-80 mx-auto my-8 self-center"></div>
      <div className={cx({ 'order-first': reversed })}>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p>{paragraphOne}</p>
        <aside className="border-substrateGreen border-l-8 pl-4 my-8">
          {asides.map((aside, idx) => (
            <p key={idx} className="font-bold">
              {aside}
            </p>
          ))}
        </aside>
        <p className="mb-12">{paragraphTwo}</p>
        <div className="border-b-2 border-black mb-2"></div>
        <h5 className="font-bold text-lg my-4">{learnMore}</h5>
        <Link to={link} className="border-substrateGreen border-b font-bold text-substrateGreen">
          {linkText}
        </Link>{' '}
        <span className="fill-current border-b-0 text-substrateGreen dark:text-white inline-block">
          <Icon name="arrow-more" />
        </span>
      </div>
    </Section>
  );
};

export default Feature;
