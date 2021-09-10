import { Link } from 'gatsby';
import React from 'react';

import TeamCard from './TeamCard';

export default function AllTeams(props) {
  const { teams, setCurTeam, setIsComponentVisible, curType, curCat, logos } = props;
  const handleClick = team => {
    setCurTeam([team]);
    setIsComponentVisible(true);
  };
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
            <div key={index}>
              {team.caseStudy ? (
                <Link className="group" to={team.caseStudy}>
                  <TeamCard team={team} description={description} logo={thisLogo} />
                </Link>
              ) : (
                <div className="group" onClick={() => handleClick(team)}>
                  <TeamCard team={team} description={description} logo={thisLogo} />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
