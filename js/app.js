/*
 * Create a list that holds all of your cards
 */
 let card = document.getElementsByClassName("card");
 let cards = [...card]

 var displayCard = function (){
     this.classList.toggle("open");
     this.classList.toggle("show");
 };

 for (var i = 0; i < cards.length; i++){
     cards[i].addEventListener("click", displayCard);
     cards[i].addEventListener("click", cardOpen);
 };


/* 3. Count movements*/

let countMoves=document.getElementsByClassName("moves");

let moves=0;

function counterMoves(){
  moves++;
  countMoves.innerHTML=moves;
}


/* 2. Match the cards, and display the success*/

let openCards=[];

// @description when cards match
function matched(){
    openCards[0].classList.add("match", "disabled");
    openCards[1].classList.add("match", "disabled");
    openCards[0].classList.remove("show", "open");
    openCards[1].classList.remove("show", "open");
    openCards = [];
}


// description when cards don't match
function unmatched(){
    openCards[0].classList.add("unmatch");
    openCards[1].classList.add("unmatch");
    disable();
    setTimeout(function(){
        openCards[0].classList.remove("show", "open" ,"unmatch");
        openCards[1].classList.remove("show", "open","unmatch");
        enable();
        openCards = [];
    },1100);
    }


function cardOpen() {
    openCards.push(this);
    var len = openCards.length;
    if(len === 2){
        counterMoves();
        if(openCards[0].type === openCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};

// @description disable cards temporarily
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

let matchedCard = document.getElementsByClassName("match");

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */