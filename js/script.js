(() => {
    'use strict';
    //====================================================================  SUPERSLIDES section
    $(document).ready( () => {

        $('#slides').superslides({
            animation: 'fade',
            play: 5000,
            pagination: false
        });

    //================================================================== TYPED.js effect
        let typed = new Typed(".typed", {
            strings: ["Select your players.", "Set your lineup.", "Win your league."],
            typeSpeed: 70,
            loop: true,
            startDelay: 1000,
            showCursor: false
        });

    });







    // for testing
    let desiredPositions = {inclusions: ["WR"], team: "LAR"};
    let doc = $("body");
    let testing_box = $("#card-testing-box");


    //==================================================================  PLAYER *CURRENT* STATS FOR SEASON
    const playerCurrentStats = () => {
        return fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonStats/2021REG?key=${SPORTS_API_TOKEN}`)
            .then(result => result.json().then(data => {
                    return data;
                })
            );
    }

    // returns team data with colors and images
    // use this to render nice UI
    // take a specific player, get their team, match it to the 'key' for this return
    // pull the colors and urls off of it...
    function getTeams() {
        return fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=${SPORTS_DATA_TOKEN}`)
            .then(res => res.json().then(data => {
                return data;
            }));
    }

    const getFilterTeamData = async () => {
        const allPlayers = await playerCurrentStats();
        const teams = await getTeams();

        console.log(allPlayers);
        let filteredData = getHighestByDataPoint(allPlayers, desiredPositions, true);
        console.log(filteredData);

        let team = filteredData[0].Team;

        // going to change this as it could throw an error
        // let teamData = teams.filter(teamObj => teamObj.Key === team)[0];

        let teamData = _.find(teams, ['Key', team]);

        return {filteredData, teamData};
    }

    getFilterTeamData().then( (data) => {
        // pass in the team data to then use the color list in the chart
        createChart(renderDoughnut(data.filteredData, data.teamData, "ReceivingTargets"));
        testing_box.html(createCard(data.filteredData[0], data.teamData));

    });






//     //==================================================================  PLAYER SEASON *PROJECTED* STATS
//     const playerSeasonProj = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonProjectionStats/2021REG?key=${SPORTS_API_TOKEN}`)
//            playerSeasonProj.then(result => {
//                result.json().then(data => {
//                    console.log(data);
//                })
//            });
//
    //=====================================================================  DEFENSIVE *PROJECTED* STATS
    // const defSeasonProj = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/FantasyDefenseProjectionsBySeason/2021REG?key=${SPORTS_API_TOKEN}`)
    //         defSeasonProj.then(result => {
    //             result.json().then(data => {
    //                 console.log(data);
    //             })
    //         });
//
//
//






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

    function createChart(data) {
        new Chart(
            document.getElementById('myChart'),
            data
        );
    }

    function createCard(cardObj, teamData) {
        return `<div style="background-color: #${teamData.PrimaryColor}; border: 4px solid #${teamData.TertiaryColor}" class="player-card flip-card" id="card">
                    <div class="flip-card-inner" datafld="flip">
                        <div class="flip-card-front">
                            <section id="top-image-sport" class="front-face">
                                <h2 style="color: #${teamData.SecondaryColor}" id="player-name">${cardObj.Name}</h2>
                                <h3 style="color: #${teamData.SecondaryColor}" id="side-sport-text">${cardObj.Season}</h3>
                                <img src="${teamData.WikipediaLogoUrl}" alt="Logo"/>
                            </section>
                            <div id="bottom-name" class="front-face">
                                <div style="text-align: center; display: flex;" id="water-mark-container">
                                    <h4 style="color: #${teamData.SecondaryColor}">${teamData.YahooName}</h4>
                                    <div style="background-color: #${teamData.TertiaryColor};">
                                        <img src="${teamData.WikipediaWordMarkUrl}" alt="Team water mark"/>
                                    </div>
                                    <h4 style="color: #${teamData.SecondaryColor}">${cardObj.Position}</h4>
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
