function createDeck(cards) {
    let result = []
    for (let card of cards) {
        const face = card.slice(0, -1)
        const suite = card.slice(-1)
        try {
            result.push(createCard(face,suite))
        } catch (err) {
            console.log('Invalid card: '+ card)
            return
        }
    }
    /*
    throwing the error escapes from the mapping operation!
    try {
    console.log(cards.map(card => {
        const face = card.slice(0,-1)
        const suite = card.slice(-1)
        try {
        return createCard(face, suite)
        }catch(err){
            throw new Error('Invalid Card'+card)
        }
    }).join(' '))
    }catch(error){
        console.log('Invalid card:' + card)
        return
    }
    */
    function createCard(face, suit) {
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q']
        if (faces.includes(face) == false) {
            throw new Error('invalid face: ' + face)
        }
        if (Object.keys(suits).includes(suit) == false) {
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
}