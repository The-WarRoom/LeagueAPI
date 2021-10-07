// this will take in the data from the api and filter based off the
// passed in inclusions

function getHighestByDataPoint(playerArr, includedPositions, filterByTeam = false) {
    let outputPlayers = [];
    const {team, inclusions} = includedPositions;
    for(let i = 0; i < playerArr.length; i++) {
        let currPlayer = playerArr[i];
        if(filterByTeam) {
            let currentPlayerTeam = currPlayer.Team;
            if(currentPlayerTeam !== team) continue;
        }
        let position = currPlayer["FantasyPosition"];
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


// FantasyPoints the highest so far



function renderDoughnut(playerData) {
    let playerColors = [];
    let playerNames = [];
    let playerReceivingTargets = [];

    for(let i = 0; i < playerData.length; i++) {
        playerColors.push(ranColor());
        playerReceivingTargets.push(playerData[i]["ReceivingTargets"]);
        playerNames.push(playerData[i].Name);
    }

    const data = {
        labels: [
            ...playerNames
        ],
        datasets: [{
            label: 'Target Share WR',
            data: [...playerReceivingTargets],
            backgroundColor: [
                ...playerColors
            ],
            hoverOffset: 4
        }]
    };

    return  {
        type: 'doughnut',
        data: data,
    };
}

function ranColor() {
    let out = "rgb(";
    for(let i = 0; i < 3; i++) {
        let ran = ~~(Math.random() * 256);
        out+=ran+",";
    }
    out = out.substring(0, out.length - 1);
    out += ")";
    return out;
}