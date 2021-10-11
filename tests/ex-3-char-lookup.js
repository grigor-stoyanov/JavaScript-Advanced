const { expect } = require("chai");

const { lookupChar } = require('./lookUpChar')

describe('testing charlookup',()=>{
    it('test invalid input type',()=>{
        expect(lookupChar(9,'not integer')).to.equal(undefined)
        expect(lookupChar('string','not integer')).to.equal(undefined)
        expect(lookupChar(9,8)).to.equal(undefined)
    })
    it('test index out of range',()=>{
        expect(lookupChar('string',19)).to.equal('Incorrect index')
        expect(lookupChar('string',-1)).to.equal('Incorrect index')
    })
    it('test correct input returns char at specified index',()=>{
        expect(lookupChar('string',3)).to.equal('i')
    })
})