(() => {




//
//     'use strict';
//
//     //PLAYER *CURRENT* STATS FOR SEASON
    let desiredPositions = {inclusions: ["WR"], team: "LAR"};
    const playerCurrentStats = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonStats/2021REG?key=${SPORTS_API_TOKEN}`)
        playerCurrentStats.then(result => {
            result.json().then(data => {
                console.log(data);
                let filteredData = getHighestByDataPoint(data, desiredPositions, true);
                console.log(filteredData);
                createChart(renderDoughnut(filteredData));


                teamData().then(result => {
                    let team = filteredData[0].Team;
                    let teamData = result.filter(teamObj => teamObj.Key === team)[0];
                    testing_box.html(createCard(filteredData[0], teamData));
                });




            })
        });


    function createChart(data) {
        let chart1 = new Chart(
            document.getElementById('myChart'),
            data
        );
    }

    // returns team data with colors and images
    // use this to render nice UI
    // take a specific player, get their team, match it to the 'key' for this return
    // pull the colors and urls off of it...
    async function teamData(){
        return fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${TESTING_KEY}`)
            .then(res => res.json().then(data => {
                return data;
            }));
    }

//
//
//
//     //PLAYER SEASON *PROJECTED* STATS
//     const playerSeasonProj = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonProjectionStats/2021REG?key=${SPORTS_API_TOKEN}`)
//            playerSeasonProj.then(result => {
//                result.json().then(data => {
//                    console.log(data);
//                })
//            });
//
    //DEFENSIVE *PROJECTED* STATS
    // const defSeasonProj = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/FantasyDefenseProjectionsBySeason/2021REG?key=${SPORTS_API_TOKEN}`)
    //         defSeasonProj.then(result => {
    //             result.json().then(data => {
    //                 console.log(data);
    //             })
    //         });
//
//
//




    let doc = $("body");
    let testing_box = $("#card-testing-box");

    doc.on("mouseenter", ".player-card", function (){
        const currCard = $(this).children()[0];
        const classes = currCard.classList;
        classes.add("flip");
    });

    doc.on("mouseleave", ".player-card", function (){
        const currCard = $(this).children()[0];
        const classes = currCard.classList;
        classes.remove("flip");
    });

    function createCard(cardObj, teamData) {
        return `<div style="background-color: #${teamData.PrimaryColor}; border: 4px solid #${teamData.TertiaryColor}" class="player-card flip-card" id="card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <section id="top-image-sport" class="front-face">
                                <h2 style="color: #${teamData.SecondaryColor}">${teamData.YahooName}</h2>
                                <h3 style="color: #${teamData.SecondaryColor}" id="side-sport-text">${cardObj.Season}</h3>
                                <img src="${teamData.WikipediaLogoUrl}" alt="Logo"/>
                            </section>
                            <div id="bottom-name" class="front-face">
                                <h3 style="color: #${teamData.SecondaryColor}" id="player-name">${cardObj.Name}</h3>
                                <div style="background-color: #${teamData.TertiaryColor}; text-align: center" id="water-mark-container">
                                    <img src="${teamData.WikipediaWordMarkUrl}" alt="Team water mark"/>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            ${cardBack(cardObj, teamData)}
                        </div>
                    </div>
                </div>`;
    }

    function cardBack(cardObj, teamData) {
        return `<section id="top-back-data">
                    <h3>${cardObj.Name}</h3>
                    <p>${cardObj.Position} for team ${cardObj.Team}</p>
                </section>
                <div id="bottom-sports-data">
                    <table>
                        <tr>
                            <th>Data Head</th>
                            <th>Data Head</th>
                            <th>Data Head</th>
                        </tr>
                        <tr>
                            <td>Data Item</td>
                            <td>Data Item</td>
                            <td>Data Item</td>
                        </tr>
                        <tr>
                            <td>Data Item 2</td>
                            <td>Data Item 2</td>
                            <td>Data Item 2</td>
                        </tr>
                    </table>
                    <section id="bottom-text-data">
                        <p>this is about the small text in the bottom area, text is not big, data, here, and , other...</p>
                    </section>
                </div>`;
    }

})();
