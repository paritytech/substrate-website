import React from 'react';

import { Link } from '../../../default/Link';
import BlueTag from '../../../ui/BlueTag';
import LineArrowButton from '../../../ui/LineArrowButton';

export default function InitiativeCard({ title, description, org, link, requirements }) {
  return (
    <Link to={link}>
      <div className="py-8 px-6 shadow-md transition-transform rounded-md bg-substrateGray-light dark:bg-substrateDark hover:scale-105">
        <h3 className="mb-0 text-2xl lg:truncate">{title}</h3>
        <p className="text-sm font-semibold">{org}</p>
        <p className="mb-6 text-sm lg:h-20 lg:line-clamp-4">{description}</p>
        <hr className="border border-substrateGray" />
        <div className="flex flex-wrap mb-6">
          {requirements.map((req, index) => (
            <BlueTag key={index} title={req} />
          ))}
        </div>
        <LineArrowButton>Learn More</LineArrowButton>
      </div>
    </Link>
  );
}
