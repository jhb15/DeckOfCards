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
    var number = prompt("How many cards do you wish to draw?", "1");
    var count = parseInt(number);

    if (count > deck.size()) {
      alert("Error not enough cards in deck to make the requested draw!");
      return;
    }

    for(var i = 0; i < count; i++) {
      var card = deck.drawCard();
      hand.addCard(card);
    }
    draw();
}

function shuffleDeckCards() {
  deck.shuffle();
  draw();
}

function orderHand() {
  hand.sort();
  draw();
}

function resetGame() {
  startGame();
}

function stopGame() {
    
}
                                      
