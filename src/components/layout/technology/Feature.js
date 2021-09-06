import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const Feature = ({ title, children, learnMore, link, linkText }) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <div className="border-b-2 border-black dark:border-substrateDarkThemeGrey mb-2">{children}</div>
      {learnMore && <h5 className="font-bold text-lg my-4">{learnMore}</h5>}
      <Link
        to={link}
        className="border-substrateGreen border-b-2 font-bold text-substrateGreen hover:mr-1 transition-all"
      >
        {linkText}
      </Link>{' '}
      <span className="fill-current border-b-0 text-substrateGreen inline-block">
        <Icon name="arrow-more" />
      </span>
    </>
  );
};

const FeatureImage = ({ children }) => {
  return <div className="flex justify-center h-full lg:pl-14 lg:pt-14 lg:pr-10">{children}</div>;
};

export { Feature, FeatureImage };
