var preCards = [];

for(var i = 0; i < 13; i++) {
    for (var j = 0; j < 4; j++) {
        
        preCards.push(new Card(CardSuit[j], CardValue[i]));
        
    }
}

preCards.forEach(function(item, index) {
    var img = new Image();
    img.src = item.getFilePath();
});