import React from 'react';

export default function AllTeams(props) {
  const { teams, curTeam, setCurTeam, curType, curCat, logos } = props;
  console.log(curTeam);
  return (
    <div className="flex flex-wrap md:justify-center">
      {teams
        .filter(team => team.types.includes(curType))
        .filter(team => team.category.includes(curCat))
        .sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
        })
        .map((team, index) => {
          const description = team.description.substring(0, 100);
          const thisLogo = logos.edges.find(logo => {
            return logo.node.name.toLowerCase() === team.name.toLowerCase();
          });
          return (
            <div key={index} value={team.name} className="group" onClick={() => setCurTeam(team.name)}>
              <div className="h-[400px] lg:h-96 max-w-xs lg:max-w-sm m-0.5 px-10 py-6 border border-substrateDark dark:border-substrateGray-light dark:border-opacity-10 border-opacity-10 cursor-pointer transform transition-all duration-150 ease-in-out group-hover:border-substrateDark dark:group-hover:border-white animate-fade-in">
                <h4 className="mb-4">{team.name}</h4>
                <img
                  className="h-[110px] w-[110px] object-contain mb-6 dark:bg-substrateDark"
                  src={thisLogo.node.publicURL}
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
                  <div className="inline-block cursor-pointer">
                    <div
                      className={`inline-block mr-2 pb-0.5 font-bold border-b-2 border-substrateDark dark:border-white transform transition-all duration-300 ease-in-out group-hover:mr-4`}
                    >
                      Case Study
                    </div>
                    <span>&#10132;</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
