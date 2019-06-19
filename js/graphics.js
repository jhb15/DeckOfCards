var deckStart = {x: 10, y: 10};
var handStart = {x: 10, y: 210};

/*
This function clears this screen by filling it with a rectangle the same colour as the background and same size of the canvas.
*/
function clear() {
  ctx.fillStyle=backCol;
  ctx.fillRect( 0, 0, canv.width, canv.height);
}

/*
This function draws everything to the canvas by calling various functions.
*/
function draw() {
  clear();
    console.log("I am here");
  drawCards(deck.cards, deckStart);
  drawCards(hand.cards, handStart);
}

function drawCards(cards, startVector) {
    var x = startVector.x; var y = startVector.y;
    
    console.log("Length of Card Array: " + cards.length);
    
    cards.forEach(drawCard);
    
    function drawCard(item, index) {        
        var img = new Image();
        img.src = item.getFilePath();
        ctx.drawImage(img, x, y);
        x += 20;
    }
    
    for(var i = 0; i < 52; i++) {
    }
}

/*
This function will create the start screen.
*/
function draw_start_screen() {
  ctx.drawImage(txt.title, 0, 0);
  ctx.drawImage(txt.sub_title, canv.width/4, canv.height/2);
}

/*
This function will display a game over screen that will show how many coins where collected
how many points where gained.
*/
function display_game_over() {
  ctx.drawImage(txt.game_over, 0, 0);

  ctx.drawImage(txt.coins_txt, canv.width/4, canv.height/2);
  ctx.fillStyle = "black";
  ctx.font = "bold 52px Arial";
  ctx.fillText("" + coins, (canv.width/4)*2, canv.height/2 + 52);

  ctx.drawImage(txt.points_txt, canv.width/4, (canv.height/4)*3);
  ctx.fillText("" + points, (canv.width/4)*2, ((canv.height/4)*3) + 52);
}  

