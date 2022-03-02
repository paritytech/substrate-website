import cx from 'classnames';
import React from 'react';

import { Link } from '../../../default/Link';
import LineArrowButton from '../../../ui/LineArrowButton';

const Tag = ({ title }) => (
  <button
    className={cx(
      'inline-block text-xs mr-4 px-3 py-2 rounded cursor-text',
      'bg-substrateBlue bg-opacity-5 dark:bg-substrateDark',
      'border border-substrateBlue  border-opacity-20 dark:border-substrateWhite'
    )}
  >
    {title}
  </button>
);

export default function InitiativeCard({ delay, title, description, org, link, requirements }) {
  return (
    <Link to={link} data-aos="fade-up" data-aos-delay={delay}>
      <div className="p-6 shadow-md transition-transform rounded-md bg-substrateGray-light lg:dark:bg-substrateBlackish hover:scale-105 ">
        <h3 className="mb-0 text-2xl lg:truncate">{title}</h3>
        <p className="text-sm font-semibold">{org}</p>
        <p className="mb-6 text-sm lg:h-20 lg:line-clamp-4">{description}</p>
        <hr className="border border-substrateGray" />
        <div className="flex flex-wrap mb-6">
          {requirements.map((req, index) => (
            <Tag key={index} title={req} />
          ))}
        </div>
        <LineArrowButton>Learn More</LineArrowButton>
      </div>
    </Link>
  );
}
