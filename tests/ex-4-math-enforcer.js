const { expect } = require("chai");

const { mathEnforcer } = require('./mathEnforcer')


describe('testing mathEnforcer object', () => {
    describe('addFive', () => {
        it('returns undefined with non number param', () => {
            expect(mathEnforcer.addFive('nonNumber')).to.equal(undefined)
        })
        it('returns number + 5', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0)
            expect(mathEnforcer.addFive(1)).to.equal(6)
            expect(mathEnforcer.addFive(1.32425)).closeTo(6.32,0.01)
        })
    })
    describe('subtractTen',()=>{
        it('returns undefined with non number param',()=>{
            expect(mathEnforcer.subtractTen('NaN')).to.equal(undefined)
        })
        it('returns number - 10',()=>{
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
            expect(mathEnforcer.subtractTen(15)).to.equal(5)
            expect(mathEnforcer.subtractTen(15.3242)).closeTo(5.32,0.01)
        })
    })
    describe('sum',()=>{
        it('returns undefined if any of its params are NaN',()=>{
            expect(mathEnforcer.sum('NaN',1)).to.equal(undefined)
            expect(mathEnforcer.sum(1,'NaN')).to.equal(undefined)
            expect(mathEnforcer.sum('NaN','NaN')).to.equal(undefined)
        })
        it('returns sum of 2 numbers',()=>{
            expect(mathEnforcer.sum(1,-2)).to.equal(-1)
            expect(mathEnforcer.sum(-1,-2)).to.equal(-3)
            expect(mathEnforcer.sum(-1,2)).to.equal(1)
            expect(mathEnforcer.sum(1,2)).to.equal(3)
            expect(mathEnforcer.sum(1.234,2.3612)).closeTo(3.59,0.01)
        })
    })
})