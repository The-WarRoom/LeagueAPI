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
                testing_box.html(createCard(data[0]));
                let filteredData = getHighestByDataPoint(data, desiredPositions, true);
                console.log(filteredData);
                createChart(renderDoughnut(filteredData));
            })
        });


    function createChart(data) {
        let chart1 = new Chart(
            document.getElementById('myChart'),
            data
        );
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
//     //DEFENSIVE *PROJECTED* STATS
//     const defSeasonProj = fetch(`https://api.sportsdata.io/api/nfl/fantasy/json/FantasyDefenseProjectionsBySeason/2021REG?key=${SPORTS_API_TOKEN}`)
//             defSeasonProj.then(result => {
//                 result.json().then(data => {
//                     console.log(data);
//                 })
//             });
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

    function createCard(cardObj) {
        return `<div class="player-card flip-card" id="card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <section id="top-image-sport" class="front-face">
                                <h2>${cardObj.Team}</h2>
                                <h3 id="side-sport-text">${cardObj.Season}</h3>
                            </section>
                            <div id="bottom-name" class="front-face">
                                <h3 id="player-name">${cardObj.Name}</h3>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            ${cardBack(cardObj)}
                        </div>
                    </div>
                </div>`;
    }

    function cardBack(cardObj) {
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
