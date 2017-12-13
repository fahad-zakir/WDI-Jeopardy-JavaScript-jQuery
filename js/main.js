let boxes = [{
        rank: "queen",
        suit: "hearts",
        boxImage: "images/box-1.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        boxImage: "images/box-2.png"
    },
    {
        rank: "king",
        suit: "hearts",
        boxImage: "images/box-3.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        boxImage: "images/box-4.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        boxImage: "images/box-5.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        boxImage: "images/box-6.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        boxImage: "images/box-7.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        boxImage: "images/box-8.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        boxImage: "images/box-9.png"

    }
];

const cardsInPlay = [];

const checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};

const flipCard = function () {
    var boxId = this.getAttribute('data-id');
    console.log("User flipped " + boxes[boxId].rank);
    console.log(boxes[boxId].boxImage);
    console.log(boxes[boxId].suit);
    cardsInPlay.push(boxes[boxId].rank);
    this.setAttribute('src', boxes[boxId].boxImage);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
};

const loadBoxes = function () {
    for (var i = 0; i < boxes.length; i++) {
        var loadBoxes = document.createElement('img');
        loadBoxes.setAttribute('src', "images/box-" + (i + 1) + ".png");
        loadBoxes.setAttribute('data-id', i);
        loadBoxes.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(loadBoxes);

    }

};

function refreshPage() {
    window.location.reload();
}
loadBoxes();
