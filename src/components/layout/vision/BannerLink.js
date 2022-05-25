import { Icon, Link } from 'gatsby-plugin-substrate';
import React from 'react';

const BannerLink = ({ link, text }) => {
  return (
    <Link to={link}>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish p-6 mb-20">
        <div>
          <p className="text-lg font-bold mb-0 mr-2 hover:mr-4 transition-all inline">{text}</p>
          <span>
            <Icon name="arrow-more" className="mb-0.5 fill-current dark:text-white inline-block" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BannerLink;
