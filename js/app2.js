/*
 * Create a list that holds all of your cards.
 * Declare all variables that will be used.
 */
let cards = document.querySelectorAll(".card");
let cardsList = Array.from(cards);
let moves=document.querySelector(".moves");
let movesNumber=0;
let stars = document.querySelector('.stars').children;
let timer = document.querySelector(".timer");
let countStars=0;
let openCards=[];
let numberMatch=0;
let deck = document.querySelector(".deck");
let congrats=document.querySelector(".modal");
let restart = document.querySelector('.restart');
let closeWindow=document.querySelector(".close");
let againGame=document.getElementById("playAgain");



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
* 1. Start from very beggining making the cards clickable.
* The click events will enable several funtions which are:
* - click a card and turn on it/make visible its content,
* - clicking two cards run a comparison to match them,
* - finding all match ends matches.
*/
 let displayCard = function (){
     this.classList.toggle("open");
     this.classList.toggle("show");
     this.classList.toggle("disabled");
  };

  for (var i = 0; i < cardsList.length; i++){
      cardsList[i].addEventListener("click", displayCard);
      cardsList[i].addEventListener("click", cardOpen);
      cardsList[i].addEventListener("click", endGame);
  };

/* 2. Setting up the counter and timers that run each time when new game starts.
* Here, we define the move counter that is defined as a comparison of two cards.
* Then, we determinate stars rating that change the number of riched cards depending on the move number.
* And, as the last one, the timer is set down and counts number of minutes and seconds needed to acomplish the singular game.
*/

function countMoves(){
  movesNumber+= 1;
  moves.innerHTML=movesNumber;
}

function starsCounter(){
  if (movesNumber <11) {
      countStars=3;
  }
  if (movesNumber > 10) {
      stars[2].style.color="white";
      countStars=2;
  }
  if (movesNumber > 18) {
      stars[1].style.color="white";
      countStars=1;
  }
  if (movesNumber > 25) {
      stars[0].style.color="white";
      countStars=0;
  }
}

let valueTimer;
let timeEnd;

function setTimer() {
    let time = 0;
    valueTimer = setInterval(function() {
        time++;
        let sec = time % 60;
        let min = (time - sec) / 60 % 60;
        let str = ("0" + min).slice(-2) + ':' + ("0" + sec).slice(-2);
        timer.textContent = str;
        timeEnd = min +" minutes and " + sec + " secods";
    }, 1000);
}

/* 3. Match the cards by comparing their type.
* If two cards are equal, then the card is disabled and number of matches increases by 1.
* if the cards are different, then the unmatch "communicate" is shown and the cards are turned down.
* In both cases the number of matches increases by one and stars rating is redefined.
*/

function cardOpen() {
    openCards.push(this);
    if(openCards.length > 1){
        if(openCards[0].type === openCards[1].type){
          openCards[0].classList.toggle("match", "disabled", "show", "open" );
          openCards[1].classList.toggle("match", "disabled", "show", "open" );
          openCards = [];
          countMoves();
          starsCounter();
          numberMatch++;
        } else {
          openCards[0].classList.add("unmatch", "disabled");
          openCards[1].classList.add("unmatch", "disabled");
          setTimeout(function(){
              openCards[0].classList.remove("show", "open", "unmatch", "disabled");
              openCards[1].classList.remove("show", "open", "unmatch", "disabled");
              openCards = [];
              countMoves();
              starsCounter();
          },500);
        }
    }
};

/* 4. Start a new game.
* In this part, we define the function that restart all game and allows to start it from beggining.
* At first, all cards are shuffle. The cards´ shuffle runs when a user wants to: a. play again, b. restart the came, c. reload the website.
* All cards return to their first conditions: are turned down, all additional classes are removed, the counters are set down to zero or initial conditions.
* The timer start to run again.
*/

function startGame(){
    cards = shuffle(cardsList);
    for (var i = 0; i < cardsList.length; i++){
      cardsList[i].classList.remove("show", "open", "match", "disabled");
    }
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        Array.prototype.forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
    }
    for(var i=0; i<3;i++){
      stars[i].style.color="yellow";
      }
    movesNumber = 0;
    moves.textContent = movesNumber;
    openCards = [];
    numberMatch = 0;
    congrats.style.display = "none";
    timer.innerHTML = "00:00";
    clearInterval(valueTimer);
    setTimer();
}

/* 5. Define the events when the game starts again:
- by cliking icon Refresh/restart;
- by reloading a website;
- by closing the End Message window;
- by clicking a button Play Again in the End Message.
*/
restart.addEventListener('click', function() {
    startGame();
});

window.onload = startGame();

closeWindow.addEventListener("click", function(e){
      startGame();
    });

againGame.addEventListener("click", function(e){
      startGame();
    });

/* 6. Display End Message with congratulations.
* If all cards have matched, display a message with the final score:
* - number of obtained stars (Stars Rating);
* - number of a final moves;
* Also the timer is blocked to show the final time needed to acomplish a game challange.
*/

function endGame(){
  if (numberMatch===8){
    congrats.style.display = "block";
    document.getElementById("countStars").innerHTML = countStars;
    document.getElementById("movesNumber").innerHTML = movesNumber;
    document.getElementById("timeFinish").innerHTML = timeEnd;
    clearInterval(valueTimer);
  }
}
