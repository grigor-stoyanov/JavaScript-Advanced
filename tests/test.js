const { sum } = require('./myModule')
const { expect, assert } = require('chai')
// testing package mocha
describe('Demo test', () => {
    it('passing test', () => {
        'do nothing'
    })
    it('failing test', () => {
        throw Error('on purpouse')
    })
    it('works with 5 and 3', () => {
        if (sum(5, 3) != 8) {
            throw Error('Did not work as Expected');
        }
    })
// to avoid using too much ifs we use chai
    it('works with 5 and 3', () => {
        expect(sum(5,3)).to.equal(9)
        assert.equal(sum(5,3),8)
    })
})

