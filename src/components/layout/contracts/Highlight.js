import { Icon, LineArrowButton } from 'gatsby-plugin-substrate';
import React from 'react';

const Highlight = ({ highlight }) => {
  const { icon, title, description, link, linkText } = highlight;

  return (
    <div className="text-center mb-8" data-aos="fade-up">
      <div className="inline-block bg-substrateDark dark:bg-white mx-auto mb-4 md:mb-6 rounded-full">
        <Icon name={icon} className="m-3 fill-current text-white dark:text-substrateBlackish" />
      </div>
      <h3 className="text-xl mb-4 md:mb-6 mx-auto">{title}</h3>
      <p className="leading-relaxed mb-6 max-w-sm mx-auto">{description}</p>
      <LineArrowButton centered primary link={link}>
        {linkText}
      </LineArrowButton>
    </div>
  );
};

export default Highlight;
