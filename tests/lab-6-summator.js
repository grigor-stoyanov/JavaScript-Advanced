const { createCalculator } = require('./summator')

const { expect } = require('chai')


describe('Summator', () => {
    let instance = null
    beforeEach(() => {
        instance = createCalculator()
    })
    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add')
        expect(instance).to.has.ownProperty('substract')
        expect(instance).to.has.ownProperty('get')
    })
    it('it adds multiple numbers', () => {
        instance.add(1)
        instance.add(2)
        expect(instance.get()).to.equal(3)
    })
    it('substracts singlee number', () => {
        instance.substract(1)
        expect(instance.get()).to.equal(-1)
    })
    it('adds and substracts', () => {
        instance.add(1)
        instance.substracts(-2)
        expect(instance.get()).to.equal(-1)
    })
    it('works with numberes as strings', () => {
        instance.add('5')
        instance.substract('-1')
        expect(instance.get()).to.equal(4)
    })

}

})