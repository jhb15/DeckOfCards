describe("Card", function() {
    var card;

    var testSuit = "Clubs";
    var testVal = "A";

    beforeEach(function() {
        card = new Card({val: 0, str: "Clubs"}, {val: 1, str: "A"});
    });

    it("Should be able to return filename", function() {
        var resultFilePath = card.getFilePath();
        var expected = "img/Cards/card" + testSuit + testVal + ".png";

        expect(resultFilePath).toEqual(expected);
    });
});