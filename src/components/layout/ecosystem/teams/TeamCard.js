import cx from 'classnames';
import React from 'react';

import CaseStudyButton from './CaseStudyButton';

export default function TeamCard(props) {
  const { team, description, logo } = props;
  return (
    <div
      className={cx(
        'h-[400px] lg:h-96 px-10 py-6 bg-white dark:bg-darkBackground cursor-pointer animate-fade-in w-full',
        `border border-substrateDark dark:border-substrateGray-light border-opacity-10 dark:border-opacity-10`,
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
      {team.caseStudy && <CaseStudyButton link={team.caseStudy} />}
    </div>
  );
}
