var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/box-1.png"
    },

    {
     	rank: "queen",
        suit: "diamonds",
        cardImage: "images/box-2.png"
    }, 
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/box-3.png"
    }, 
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/box-4.png"
    }
    
];

var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
};

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/box-1.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement); 
    }
};
function refreshPage(){
    window.location.reload();
} 
createBoard();