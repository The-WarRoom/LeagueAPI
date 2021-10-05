'use strict';


//PLAYER *CURRENT* STATS FOR SEASON
const playerCurrentStats = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonStats/2021REG?key=${SPORTS_API_TOKEN}`)
    playerCurrentStats.then(result => {
        result.json().then(data => {
            console.log(data);
        })
    });



//PLAYER SEASON *PROJECTED* STATS
const playerSeasonProj = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonProjectionStats/2021REG?key=${SPORTS_API_TOKEN}`)
       playerSeasonProj.then(result => {
           result.json().then(data => {
               console.log(data);
           })
       });

//DEFENSIVE *PROJECTED* STATS
const defSeasonProj = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/FantasyDefenseProjectionsBySeason/2021REG?key=${SPORTS_API_TOKEN}`)
        defSeasonProj.then(result => {
            result.json().then(data => {
                console.log(data);
            })
        });





