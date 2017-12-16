// console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree= "queen";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);

var cards = ['queen', 'king', 'queen', 'king'];
var cardsInPlay = [];

// checks if cards match - if so, displays 'match' message, else displays 'sorry, try again'
var checkForMatch = function() {
	// if there are 2 cards in play at this particular time
	if (cardsInPlay.length === 2) {
		// if the first card (at index 0) is equal to the second card (at idex 1)
		if (cardsInPlay[0] === cardsInPlay[1]) {
		// console.log('You found a match!');
			alert('You found a match!');
	}
	else {
		// console.log('Sorry, try again.');
		alert('Sorry, try again.');
		}
	}
}


// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log('User flipped ' + cardOne);


// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log('User flipped ' + cardTwo);

// if (cardsInPlay.length === 2) {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert('You found a match!');
// 	}
// 	else {
// 		alert('Sorry, try again.');
// 	}
// }

var flipCard = function(cardId) {
	// this prints in console 'User flipped queen' + cards[cardId] accesses the var cards array declared above (outside of the function)
	// and [cardId]
	
	cardsInPlay.push(cards[cardId]);
	console.log('User flipped ' + cards[cardId]);

	// if (cardsInPlay.length === 2) {
	// 	if (cardsInPlay[0] === cardsInPlay[1]) {
	// 		alert('You found a match!');
	// 	}
	// 	else {
	// 		alert('Sorry, try again.');
	// 	}
	// }
	checkForMatch();

};

// this references the cardsInPlay array above in line 12
// within the flipCard function, the cardsInPlay array has been pushed with the values from the var cards (line 53)
flipCard(0);
flipCard(3);
// flipCard('queen');
// flipCard('king');