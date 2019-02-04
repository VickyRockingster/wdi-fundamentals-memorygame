const cards = [
{
name: 'queen',
suit: 'hearts',
cardImage: "../images/queen-of-hearts/png"
}, 
{
name: 'queen',
suit: 'diamonds',
cardImage: "../images/queen-of-diamonds/png"
}, 
{
name: 'king',
suit: 'hearts',
cardImage: "../images/king-of-hearts/png"
}, 
{
name: 'king',
suit: 'diamonds',
cardImage: "../images/king-of-diamonds/png"
}]
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
	console.log('User flipped ' + cards[cardId].name)
	cardsInPlay.push(cards[cardId].name)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
}
flipCard(0)
flipCard(2)
