function createCard(face, suit) {
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    const faces = ['2','3','4','5','6','7','8','9','10','A','J','K','Q']
    if (faces.includes(face) == false){
        throw new Error('invalid face: ' + face)
    }
    if (Object.keys(suits).includes(suit) == false){
        throw new Error('invalid suit: ' + suit)
    }
    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit
        }
    }

}

card1 = createCard('A', 'S')
card2 = createCard('10', 'H')
card3 = createCard('1', 'C')
card4 = createCard('1','F')
console.log(card1.toString())

console.log(card2.toString())

console.log(card3.toString())
console.log(card4.toString())