var backCol = "#088A08";

var deck;
var hand;

window.onload = function() {
    
    console.log("I am here");
  
  //Canvas & Context
  canv=document.getElementById("gameCanvas");
  ctx=canv.getContext("2d");
  
  /*str = localStorage.getItem("backround_col");
  if (str != null) {
    backCol = str;
  }*/

  document.getElementById("gameCanvas").style.backgroundColor = backCol;
 
  startGame();
}

function startGame() {
  console.log("Game Started!");
  
  deck = new Deck(true);
  hand = new Deck(false);
  draw();
}

function drawCards() {
    
}

function shuffleCards() {

}

function orderHand() {

}

function resetGame() {
    
}

function stopGame() {
    
}
                                      
