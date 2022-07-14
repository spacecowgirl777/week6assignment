var expect = chai.expect;

describe('MyFunctions', function(){
    describe('deckClass', function(){
        it('should make a full card pool', function(){
            let xPack = new deck();
            xPack.fillDeck();
            expect(xPack.pool.length).to.equal(52);
        });

        it('should contain card class properties', function(){
            let xPack = new deck();
            xPack.fillDeck();
            xPack.pool[0].displayCard();
            expect(xPack.pool[0].suit).to.equal('Hearts');
            expect(xPack.pool[0].value).to.equal(1);
            expect(xPack.pool[51].suit).to.equal('Spades');
        });
        
        it('should shuffle the deck', function(){
            let xPack = new deck();
            xPack.fillDeck();
            
            let shuffledPack = new deck;
            shuffledPack.fillDeck();
            shuffledPack.shuffleDeck(shuffledPack.pool);
            
            expect(xPack.pool[0].suit + xPack.pool[0].title).to.not.equal
            (shuffledPack.pool[0].suit + shuffledPack.pool[0].title);
  
        })


    });
});
