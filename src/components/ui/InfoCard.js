import React from 'react';

import { Link } from '../default/Link';
import LineArrowButton from '../ui/LineArrowButton';

export default function InfoCard({ delay, title, link, description }) {
  return (
    <Link to={link} data-aos="fade-up" data-aos-delay={delay}>
      <div className="mb-14 md:mb-8 md:w-80 lg:w-96 lg:py-8 lg:px-6 lg:shadow-xl hover:scale-105 transition-transform rounded-md lg:dark:bg-substrateBlackish">
        <h3 className="mb-5 text-2xl">{title}</h3>
        <p className="mb-5 md:h-[110px]">{description}</p>
        <LineArrowButton primary>See Funding Options</LineArrowButton>
      </div>
    </Link>
  );
}
