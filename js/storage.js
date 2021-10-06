
const labels = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(54,122,153)',
        borderColor: 'rgb(144,88,99)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};






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
                                <img src="" alt="${cardObj.Team}" id="team-image"/>
                                <h3 id="side-sport-text">Season Here</h3>
                            </section>
                            <div id="bottom-name" class="front-face">
                                <h3 id="player-name">Name Here</h3>
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
                    <h3>Player Name</h3>
                    <p>A little bit of data here</p>
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