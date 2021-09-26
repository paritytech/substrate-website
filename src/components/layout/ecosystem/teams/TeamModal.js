import cx from 'classnames';
import React from 'react';

import Icon from '../../../default/Icon';
import Tag from '../../../ui/Tag';
import CaseStudyButton from './CaseStudyButton';

export default function TeamModal(props) {
  const { curTeam, logos, setIsComponentVisible } = props;
  return (
    <>
      {curTeam.map((team, index) => {
        const thisLogo = logos.edges.find(logo => {
          return logo.node.name.toLowerCase() === team.name.toLowerCase();
        });
        return (
          <div key={index} className="relative">
            <div onClick={() => setIsComponentVisible(false)} className="absolute top-0 right-0 ">
              <Icon
                className={cx(
                  'h-6 w-6 fill-current text-substrateDark dark:text-white cursor-pointer',
                  'duration-300 ease-in-out hover:opacity-50'
                )}
                name="close-x"
              />
            </div>

            <a className="inline-block" href={team.link} target="_blank" rel="noreferrer">
              <div className="flex items-center">
                <div className="text-2xl font-bold">{team.name}</div>
                <Icon name="external-link" className="h-4 w-4 ml-4 fill-current text-substrateDark dark:text-white" />
              </div>
            </a>
            {thisLogo && (
              <img
                className="h-[110px] w-[110px] p-0.5 object-contain my-6 dark:bg-gray-300 rounded-full"
                src={thisLogo.node.publicURL}
              />
            )}
            <div className="mb-4">
              <div className="text-sm mb-1 flex">
                <div className="tracking-wider uppercase mr-2">Type:</div>
                <div>
                  {team.types
                    .filter(e => e != 'All Teams')
                    .map((type, index) => {
                      const lastIndex = team.types.filter(e => e != 'All Teams').length - 1;
                      return (
                        <span key={index}>
                          {type}
                          {lastIndex != index && `, `}
                        </span>
                      );
                    })}
                </div>
              </div>
              <div className="text-sm flex">
                <div className="tracking-wider uppercase mr-2">Industry:</div>{' '}
                <div>
                  {team.category
                    .filter(e => e != 'All')
                    .map((e, i) => {
                      const lastIndex = team.category.filter(e => e != 'All').length - 1;
                      return (
                        <span key={i}>
                          {e}
                          {lastIndex != i && `, `}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <p>{team.description}</p>
            {team.caseStudy && (
              <div className="mb-8">
                <CaseStudyButton link={team.caseStudy} />
              </div>
            )}
            {team.runtimes && (
              <div className="mb-6">
                <div className="text-sm tracking-wider uppercase">Substrate Runtimes:</div>
                <div className="flex flex-wrap">
                  {team.runtimes.map((runtime, index) => (
                    <div key={index}>
                      <Tag title={runtime.title} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex items-center">
              <div className="h-2 w-2 mr-2 bg-substrateGreen rounded-full"></div>
              {` `}
              <p className="mb-0 ">{team.tag}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
