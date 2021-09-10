import React from 'react';

import Icon from '../../../default/Icon';

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
              <Icon name="close-x" className="h-6 w-6 fill-current text-substrateDark dark:text-white cursor-pointer" />
            </div>

            <a className="inline-block" href={team.link} target="_blank" rel="noreferrer">
              <div className="flex items-center">
                <div className="text-2xl font-bold">{team.name}</div>
                <Icon name="external-link" className="h-4 w-4 ml-4 fill-current text-substrateDark dark:text-white" />
              </div>
            </a>
            <img
              className="h-[110px] w-[110px] p-0.5 object-contain my-6 dark:bg-gray-300 rounded-full"
              src={thisLogo.node.publicURL}
            />
            <div className="mb-4">
              {/* <div className="text-sm">
                <span className="tracking-wider uppercase">Type:</span> Substrate Builders Program
              </div> */}
              <div className="text-sm">
                <span className="tracking-wider uppercase">Industry:</span>{' '}
                {team.category
                  .filter(e => e != 'All')
                  .map((e, i) => {
                    const arr = team.category.filter(e => e != 'All');
                    const lastIndex = arr.length - 1;
                    return (
                      <span key={i}>
                        {e}
                        {lastIndex != i && `, `}
                      </span>
                    );
                  })}
              </div>
            </div>
            <p>{team.description}</p>
            {team.runtimes && (
              <div className="mb-6">
                <div className="text-sm tracking-wider uppercase">Substrate elements</div>
                <div className="flex flex-wrap">
                  {team.runtimes.map((runtime, index) => (
                    <div key={index}>
                      <button className="inline-block bg-substratePink dark:bg-substrateDark bg-opacity-5 mt-4 mr-4 px-4 py-2 border border-substratePink dark:border-substrateWhite border-opacity-30 rounded cursor-text">
                        {runtime.title}
                      </button>
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
