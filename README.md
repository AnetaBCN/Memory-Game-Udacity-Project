# Memory Game Project

## Table of Contents

* [Game description](#gamedescription)
* [How to play?](#howplay)
* [Code description](#codedescription)
* [Instructions](#instructions)
* [Contributing](#contributing)

## Game description
The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:
* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.

The game ends once all cards have been correctly matched.

## How to play?

* Click on a card and flip it up
* Click another card and check if the cards match or not. 
* If the cards doesn´t match, try to remember their content. 
* Look for the pair of cards. 
* Try to match cards with less moves and as fast as it is possible. 
* Less move you reach, more stars you win.

## Code description


The code is built with following steps:

1. Create a list that holds all of your cards. Declare all variables that will be used.

2. Use shuffle function from http://stackoverflow.com/a/2450976 to reorder the card position. 

3.  Start from very beginning making the cards clickable. The click events will enable several functions which are:
* Click a card and turn on it/make visible its content,
* Clicking two cards run a comparison to match them,
* Finding all match ends matches.

4. Set up the counter and timers that run each time when new game starts.
* Here, we define the move counter that is defined as a comparison of two cards.
* Then, we determinate stars rating that change the number of reached cards depending on the move number.
* And, as the last one, the timer is set down and counts number of minutes and seconds needed to accomplish the singular game.
    
5. Match the cards by comparing their type
* If two cards are equal, then the card is disabled and number of matches increases by 1.
* if the cards are different, then the unmatched "communicate" is shown and the cards are turned down.

6. Start a new game.
* In this part, we define the function that restart all game and allows to start it from begining.
* At first, all cards are shuffle. The cards´ shuffle runs when a user wants to: a. play again, b. restart the came, c. reload the website.
* All cards return to their first conditions: are turned down, all additional classes are removed, the counters are set down to zero or initial conditions.
* The timer start to run again.

7. Define the events when the game starts again:
- by clicking icon Refresh/restart;
- by reloading a website;
- by closing the End Message window;
- by clicking a button Play Again in the End Message.

8. Display End Message with congratulations.
If all cards have matched, display a message with the final score:
- number of obtained stars (Stars Rating);
- number of a final moves;

Also the timer is blocked to show the final time needed to accomplish a game challenge.

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
