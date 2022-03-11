import React from 'react';

import LineArrowButton from '../ui/LineArrowButton';

export default function InfoCard({ delay, title, description, setCurrentReq }) {
  return (
    <a
      href="#initiatives"
      className="cursor-pointer"
      data-aos="fade-up"
      data-aos-delay={delay}
      onClick={() => setCurrentReq(title)}
    >
      <div className="mb-14 lg:mb-6 md:mx-3 md:w-80 lg:w-96 lg:py-8 lg:px-6 lg:shadow-xl hover:scale-105 transition-transform rounded-md lg:dark:bg-substrateBlackish">
        <h3 className="mb-5 text-2xl">{title}</h3>
        <p className="mb-5 md:h-[110px]">{description}</p>
        <LineArrowButton primary>See {title} Options</LineArrowButton>
      </div>
    </a>
  );
}
