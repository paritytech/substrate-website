const teamsData = require('../../data/teams.json');

const allTeams = teamsData.teams;

let chainCount = 0;
let chainPokadot = 0;

for (let team of allTeams) {
  if (team.tag === 'Chain') {
    chainCount++;
    if (team.types.indexOf('Building for Polkadot') >= 0) {
      chainPokadot++;
    }
  }
}

console.log('All Chains', chainCount);
console.log('All Chains Polkadot', chainPokadot);
