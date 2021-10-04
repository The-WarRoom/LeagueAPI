'use strict';


const players = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonProjectionStats/2021REG?key=${SPORTS_API_TOKEN}`)
       players.then(result => {
           result.json().then(data => {
               console.log(data);
           })
       });


