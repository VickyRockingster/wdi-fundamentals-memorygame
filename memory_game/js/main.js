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
const createBoard = function () {
	for (let i = 0; i < cards.length; I++) {
		let cardElement = document.createElement('img')
		cardElement.setAttribute('src', '../images/back.png');
		cardElement.setAttribute('id', i);
		cardElement.addEventListener('click', flipCard())
		game-board.getElementsbyTagName('id')[i].appendChild(cardElement)
	}
}
const checkForMatch = function () {
	this.setAttribute('src', cards[i].cardImage)
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0]  === cardsInPlay[1]) {
			console.log('You found a match!')
		} else {
			console.log('Sorry, try again.')
		}
	}
}
const flipCard = function () {
	let cardId = this.getAttribute('id')
	checkForMatch()
	console.log('User flipped ' + cards[cardId].name)
	cardsInPlay.push(cards[cardId].name)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
}
createBoard()