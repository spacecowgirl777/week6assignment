//when finished should:
// 1. deal 26 cards to two players
// 2. iterate through turns where each player plays a card
// 3. cards are compared, tie = 0, winner gets 1
// 4. when all cards are gone, display scores and declare a winner
// 5. write unit tests using mocha and chai for at least 1 function
//-----------------------------------------------------------------------

//create card class
class card{
    constructor(suit,title,value){
        this.suit = suit;
        this.title = title;
        this.value = value;
    }
//display card   
    displayCard(){
        console.log(this.title + ' of ' + this.suit);
    }

}

//create deck class
class deck{
    constructor(){
        this.pool = [];
    }

//loop to create a full deck 
    fillDeck(){
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        let titles = ['Ace', '2', '3', '4', '5', '6', '7', 
        '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; j < titles.length; j++){
                this.pool.push(new card(suits[i],titles[j],values[j]));
                
            }
        }
        
    }
// test fill deck function with mocha and chai
//^^completed

//shuffle deck function
    shuffleDeck(array){
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

}


//create player class
class players{
    
    constructor(name1,name2){
        this.one = name1;
        this.score1 = 0;
        this.hand1 = new deck;
        
        this.two = name2;
        this.score2 = 0;
        this.hand2 = new deck;

    }

//gives each player a stack of cards    
    dealDeck(array){
        for(let i = 0; i < array.length; i += 2){
           this.hand1.pool.push(array[i]);
           this.hand2.pool.push(array[(i+1)]);
            
        }
    }

//playing cards 
    gameRound(hand1,hand2){
        for(let i = 0; i < hand1.pool.length; i++){
            var compare;
            if(hand1.pool[i].value > hand2.pool[i].value){
                compare = 1;
            } else if(hand1.pool[i].value < hand2.pool[i].value){
                compare = 2;
            } else if(hand1.pool[i].value == hand2.pool[i].value){
                compare = 3;
            }

            console.log(hand1.pool[i].title + ' of ' + hand1.pool[i].suit 
            + ` (${hand1.pool[i].value})` + " vs. " + hand2.pool[i].title 
            + ' of ' + hand2.pool[i].suit + ` (${hand2.pool[i].value})`);

            

//changing score
            switch(compare){
                case 1:
                    this.score1 = this.score1 + 1;
                    console.log(`${this.one}: ${this.score1}   ${this.two}: ${this.score2}`);
                    break;
                 
                case 2:
                    this.score2 = this.score2 + 1;
                    console.log(`${this.one}: ${this.score1}   ${this.two}: ${this.score2}`);
                    break;
                 
                default:
                    console.log(`!tie game!`);
                         
            }
         
        }

    }

    displayScores() {
        if(this.score1 > this.score2){
            console.log(this.one + ' wins!!!');
        } else if (this.score1 < this.score2){
            console.log(this.two + ' wins!!!');
        } else{
            console.log("Tie Game :o");
        }
        
    }

}

//display scores at end

//prepare game

let y = new deck;
y.fillDeck();
y.shuffleDeck(y.pool);
let player = new players("han", "computer");
player.dealDeck(y.pool);
player.gameRound(player.hand1,player.hand2);
player.displayScores();






