import cx from 'classnames';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

import TeamCard from './TeamCard';

export default function AllTeams(props) {
  const { teams, setCurTeam, setIsComponentVisible, curType, curCat, logos, size } = props;
  const [displayedTeams, setDisplayedTeams] = useState([]);
  const handleClick = team => {
    setCurTeam([team]);
    setIsComponentVisible(true);
  };
  useEffect(() => {
    const filteredTeams = teams
      .filter(team => team.types.includes(curType))
      .filter(team => team.category.includes(curCat))
      .sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
      });
    setDisplayedTeams(filteredTeams);
  }, [curType, curCat]);

  return (
    <div className={cx('mx-auto xl:w-[1200px] lg:w-[800px]', { 'min-h-800px': displayedTeams.length <= 6 })}>
      <div className="flex flex-wrap">
        {displayedTeams.map((team, index) => {
          const description = team.description.substring(0, 100);
          const thisLogo = logos.edges.find(logo => {
            return logo.node.name.toLowerCase() === team.name.toLowerCase();
          });
          const numTeam = displayedTeams.length;
          return (
            <div key={index}>
              {team.caseStudy ? (
                <Link className="group" to={team.caseStudy}>
                  <TeamCard
                    team={team}
                    description={description}
                    logo={thisLogo}
                    size={size}
                    numTeam={numTeam}
                    index={index}
                  />
                </Link>
              ) : (
                <div className="group" onClick={() => handleClick(team)}>
                  <TeamCard
                    team={team}
                    description={description}
                    logo={thisLogo}
                    size={size}
                    numTeam={numTeam}
                    index={index}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
