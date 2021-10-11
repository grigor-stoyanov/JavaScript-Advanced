const { expect } = require("chai");

const { isOddOrEven } = require('./isEvenOdd')


describe('Odd or Even tests', () => {
    it('test if non string returns undefined', () => {
        expect(isOddOrEven([1, 3, 2])).to.equal(undefined)
    })
    it('test if even string returns even',()=>{
        expect(isOddOrEven('ayeb')).to.equal('even')
    })
    it('test if odd string returns odd',()=>{
        expect(isOddOrEven('aye')).to.equal('odd')
    })

})