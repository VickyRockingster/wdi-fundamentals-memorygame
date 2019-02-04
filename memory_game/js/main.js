const cards = ['queen', 'queen', 'king', 'king']
const cardsInPlay = []
const checkForMatch = function () {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log('You found a match!')
		} else {
			console.log('Sorry, try again.')
		}
}
const flipCard = function (cardId) {
	checkForMatch()
console.log('User flipped ' + cards[cardId])
cardsInPlay.push(cards[cardId])
}
flipCard(0)
flipCard(2)
