import cx from 'classnames';
import React from 'react';

import useWindowSize from '../../../../hooks/use-window-size';
import CaseStudyButton from './CaseStudyButton';

export default function TeamCard(props) {
  const { team, description, logo, index, numTeam } = props;
  const size = useWindowSize();
  const smScreen = size.width < 768;
  const mdScreen = size.width > 768 && size.width < 1280;
  const lgScreen = size.width > 1280;
  return (
    <div
      className={cx(
        'h-[400px] lg:h-96 max-w-xs lg:max-w-sm px-10 py-6 bg-white dark:bg-darkBackground cursor-pointer animate-fade-in',
        `border-t border-l border-substrateDark dark:border-substrateGray-light border-opacity-10 dark:border-opacity-10`,
        { 'border-r': smScreen || (mdScreen && index % 2 === 1) },
        { 'border-b': smScreen && numTeam - index === 1 },
        { 'border-r border-b': mdScreen && numTeam - index === 1 },
        { 'border-b': mdScreen && numTeam - index === 2 },
        { 'border-r': lgScreen && ((index + 1) % 3 === 0 || numTeam - index === 1) },
        {
          'border-b': lgScreen && (numTeam - index === 1 || numTeam - index === 2 || numTeam - index === 3),
        },
        'duration-75 ease-in-out hover:scale-105 hover:border hover:shadow-xl'
      )}
    >
      <h4 className="mb-4">{team.name}</h4>
      {logo && (
        <img
          className="h-[110px] w-[110px] p-0.5 object-contain mb-6 dark:bg-gray-300 rounded-full"
          src={logo.node.publicURL}
        />
      )}
      <p className="mb-16 lg:mb-10 h-[78px]">
        {team.caseStudy ? (
          <>
            {description} {team.description.length > 100 && '...'}
          </>
        ) : (
          <>{team.description}</>
        )}
      </p>
      <div className="">{team.caseStudy && <CaseStudyButton link={team.caseStudy} />}</div>
    </div>
  );
}
