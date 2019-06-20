var backCol = "#088A08";

var deck;
var hand;

var deckStart = {x: 5, y: 10};
var handStart = {x: 5, y: 210};

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