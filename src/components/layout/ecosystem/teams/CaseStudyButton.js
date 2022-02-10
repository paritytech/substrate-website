import React from 'react';

import Icon from '../../../default/Icon';
import { Link } from '../../../default/Link';

export default function CaseStudyButton({ link }) {
  return (
    <Link to={`/ecosystem/projects/${link}`}>
      <div className="flex items-center cursor-pointer">
        <div
          className={`flex items-start mr-2 pb-0.5 font-bold border-b-2 border-substrateDark dark:border-white transform transition-all duration-300 ease-in-out hover:mr-3`}
        >
          <Icon name="case-study" className="h-4 w-4 mr-1 fill-current text-substrateDark dark:text-white" />
          <span className="-mt-0.5">Case Study</span>
        </div>
        <Icon name="arrow-more" />
      </div>
    </Link>
  );
}
