var CardValue = Object.freeze({
    ace: {str: "A", val: 1},
    two: {str: "2", val: 2},
    three: {str: "3", val: 3},
    four: {str: "4", val: 4},
    five: {str: "5", val: 5},
    six: {str: "6", val: 6},
    seven: {str: "7", val: 7},
    eight: {str: "8", val: 8},
    nine: {str: "9", val: 9},
    ten: {str: "10", val: 10},
    jack: {str: "J", val: 11},
    queen: {str: "Q", val: 12},
    king: {str: "K", val: 13}
});

var CardSuit = Object.freeze({
    club: {str: "Clubs", val: 0},
    spade: {str: "Spade", val: 1},
    heart: {str: "Hearts", val: 2},
    dimond: {str: "Dimonds", val: 3}
});

class Deck {
    constructor(fill) {
        this.cards = [];
        if (fill) {
            this.initDeck();
        }
    }
    
    initDeck() {
        console.log("Initialise Deck");
        for(var i = 0; i < 13; i++) {
            for (var j = 0; j < 4; j++) {
                this.cards.push(new Card(CardSuit[j], CardValue[i]));
                console.log(i + " " + j);
            }
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    
    getFilePath() {
        return "../img/Cards/card" + this.suit.str + this.value.str + ".png";
    }
}
