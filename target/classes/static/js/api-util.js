// this will take in the data from the api and filter based off the
// passed in inclusions

function getHighestByDataPoint(playerArr, includedPositions, filterByTeam = true) {
    let outputPlayers = [];
    const {team, inclusions} = includedPositions; // could use some re-working later maybe a util function to parse
    for(let i = 0; i < playerArr.length; i++) {
        let currPlayer = playerArr[i];
        let position = currPlayer["FantasyPosition"];

        if(filterByTeam) {
            if(currPlayer.Team !== team) continue;
        }
        if(inclusions.includes(position)) {
            outputPlayers.push(currPlayer);
        }
    }
    return outputPlayers;
}

// determine target share for a given position
// get all same positions for a given team
// WR ex
//  sum up all the yards for the team and determine the share of a given WR

/* WR =>
     Air yards
     target share
     ReceivingTouchdowns
     ReceivingYards
     Receptions
*/
// Over x amount of weeks so far


function renderDoughnut(playerData, teamDataColors, chartStat) {
    let colors = buildTeamColors(teamDataColors);
    let playerColors = [];
    let playerNames = [];
    let playerReceivingTargets = [];

    for(let i = 0; i < playerData.length; i++) {
        // does not work well with a chart of size that is 1+ the len of the colors array, ends up putting 2 same colors together..
        // maybe do something with the stat for those that are at 0 to help divide the chart up
        // if so, keep the ratio of target share if say a point was added to the 0's to get them to render on the chart
        playerColors.push(colors[i % colors.length]);

        playerReceivingTargets.push(playerData[i][chartStat]);
        playerNames.push(playerData[i].Name);
    }

    const data = {
        labels: [...playerNames],
        datasets: [{
            label: `Target Share ${playerData[0].FantasyPosition}`,
            data: [...playerReceivingTargets],
            backgroundColor: [...playerColors],
            hoverOffset: 4
        }]
    };

    return  {
        type: 'doughnut',
        data: data,
    };
}
