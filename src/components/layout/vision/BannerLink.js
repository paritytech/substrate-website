import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';

const BannerLink = ({ icon, link, text }) => {
  return (
    <Link to={link}>
      <div className="bg-substrateGray-light dark:bg-substrateBlackish px-10 py-8 flex items-center">
        <Icon name={icon} className="flex-none h-12 w-12 mr-6" />
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
