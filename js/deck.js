var CardValue = [
    {str: "A", val: 1},
    {str: "2", val: 2},
    {str: "3", val: 3},
    {str: "4", val: 4},
    {str: "5", val: 5},
    {str: "6", val: 6},
    {str: "7", val: 7},
    {str: "8", val: 8},
    {str: "9", val: 9},
    {str: "10", val: 10},
    {str: "J", val: 11},
    {str: "Q", val: 12},
    {str: "K", val: 13}
];

var CardSuit = [
    {str: "Clubs", val: 0},
    {str: "Spades", val: 1},
    {str: "Hearts", val: 2},
    {str: "Diamonds", val: 3}
];

class Deck {
    constructor(fill) {
        this.cards = [];
        if (fill) {
            this.initDeck();
        }
    }
    
    /**
     * 
     */
    initDeck() {
        console.log("Initialise Deck");
        for(var i = 0; i < 13; i++) {
            for (var j = 0; j < 4; j++) {
                
                this.cards.push(new Card(CardSuit[j], CardValue[i]));
                
            }
        }
    }

    /**
     * Function returns first card in array and rmoves it from the array.
     */
    drawCard() {
        console.log(this);
        var card = this.cards[0];
        this.cards.splice(0, 1);
        return card;
    }

    /**
     * Function for adding a card to a deck
     */
    addCard(card) {
        console.log(this);
        this.cards.push(card);
    }

    /**
     * Function for shuffleing cards has come from this answer on stack overflow,
     * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     */
    shuffle() {
        var currentIndex = this.cards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }

    sort() {
        this.cards.sort(function(a, b) {
            if (a.suit.val < b.suit.val) {
                return -1;
            }
            if (a.suit.val > b.suit.val) {
                return 1;
            }
            if (a.value.val < b.value.val) {
                return -1;
            }
            if (a.value.val > b.value.val) {
                return 1;
            }
            return 0;
          });
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    
    /**
     * 
     */
    getFilePath() {
        return "img/Cards/card" + this.suit.str + this.value.str + ".png";
    }
}
