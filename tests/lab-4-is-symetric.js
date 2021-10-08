const { expect } = require('chai')
const { isSymmetric } = require('./symetry')



describe('Symetry checker', () => {
    it('returns true for symetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    })
    it('returns false for symetric array of dif types', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.true
    })
    it('returns flase for non symetric array', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false
    })
    it('returns false for non array', () => {
        expect(isSymmetric(5)).to.be.false
    })
    // test overloading
    it('returns true for symetric array with strings', () => {
        expect(isSymmetric('a', 'b', 'b', 'a')).to.be.true
    })

})