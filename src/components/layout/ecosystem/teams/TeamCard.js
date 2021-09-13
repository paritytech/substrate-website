import cx from 'classnames';
import React from 'react';

import Icon from '../../../default/Icon';

export default function TeamCard(props) {
  const { team, description, logo, index, size, numTeam } = props;
  const smScreen = size.width < 768;
  const mdScreen = size.width > 768 && size.width < 1280;
  const lgScreen = size.width > 1280;
  return (
    <div
      className={cx(
        'h-[400px] lg:h-96 max-w-xs lg:max-w-sm px-10 py-6 cursor-pointer animate-fade-in',
        `border-t border-l border-substrateDark dark:border-substrateGray-light border-opacity-10 dark:border-opacity-10`,
        { 'border-r': smScreen || (mdScreen && index % 2 === 1) },
        { 'border-b': smScreen && numTeam - index === 1 },
        { 'border-r border-b': mdScreen && numTeam - index === 1 },
        { 'border-b': mdScreen && numTeam - index === 2 },
        { 'border-r': lgScreen && ((index + 1) % 3 === 0 || numTeam - index === 1) },
        {
          'border-b': lgScreen && (numTeam - index === 1 || numTeam - index === 2 || numTeam - index === 3),
        }
      )}
    >
      <h4 className="mb-4">{team.name}</h4>
      <img
        className="h-[110px] w-[110px] p-0.5 object-contain mb-6 dark:bg-gray-300 rounded-full"
        src={logo.node.publicURL}
      />
      <p className="mb-6 lg:mb-10 h-[78px]">
        {team.caseStudy ? (
          <>
            {description} {team.description.length > 100 && '...'}
          </>
        ) : (
          <>{team.description}</>
        )}
      </p>
      {team.caseStudy && (
        <div className="flex items-center cursor-pointer">
          <div
            className={`flex items-center mr-2 pb-0.5 font-bold border-b-2 border-substrateDark dark:border-white transform transition-all duration-300 ease-in-out group-hover:mr-4`}
          >
            <Icon name="case-study" className="h-4 w-4 mr-1 fill-current text-substrateDark dark:text-white" />
            <span className="mt-0.5">Case Study</span>
          </div>
          <span>&#10132;</span>
        </div>
      )}
    </div>
  );
}
