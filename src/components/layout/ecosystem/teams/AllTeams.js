import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import TeamCard from './TeamCard';

export default function AllTeams(props) {
  const { teams, setCurTeam, setIsComponentVisible, curType, curCat, logos } = props;
  const [displayedTeams, setDisplayedTeams] = useState([]);
  const [zeroTeamsText, setZeroTeamsText] = useState('');
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
    setZeroTeamsText('Sorry, no matches');
    setDisplayedTeams(filteredTeams);
  }, [curType, curCat]);

  return (
    <div
      className={cx('mx-auto xl:w-[1152px] lg:w-[768px] md:w-[640px] w-[320px]', {
        'min-h-800px': displayedTeams.length <= 6,
      })}
    >
      {displayedTeams.length === 0 ? (
        <div className="text-center mt-20">
          <p>{zeroTeamsText}</p>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {displayedTeams.map((team, index) => {
            const description = team.description.substring(0, 100);
            const thisLogo = logos.edges.find(logo => {
              return logo.node.name.toLowerCase() === team.name.toLowerCase();
            });
            const numTeam = displayedTeams.length;
            return (
              <div key={index}>
                <div className="" onClick={() => handleClick(team)}>
                  <TeamCard team={team} description={description} logo={thisLogo} numTeam={numTeam} index={index} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
