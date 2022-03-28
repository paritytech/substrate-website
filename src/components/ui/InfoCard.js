import React from 'react';

import LineArrowButton from '../ui/LineArrowButton';

export default function InfoCard({ delay, title, description, setCurrentReq }) {
  return (
    <a
      href="#initiatives"
      className="cursor-pointer h-full"
      data-aos="fade-up"
      data-aos-delay={delay}
      onClick={() => setCurrentReq(title)}
    >
      <div className="h-full flex flex-col justify-between md:mx-3 lg:py-8 lg:px-6 lg:shadow-xl hover:scale-105 transition-transform rounded-md lg:dark:bg-substrateBlackish">
        <div>
          <h3 className="mb-5 text-2xl">{title}</h3>
          <p className="mb-5">{description}</p>
        </div>
        <div className="hover:whitespace-nowrap">
          <LineArrowButton primary>See {title} Options</LineArrowButton>
        </div>
      </div>
    </a>
  );
}
