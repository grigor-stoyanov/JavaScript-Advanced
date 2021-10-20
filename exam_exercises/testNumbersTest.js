const { testNumbers } = require("./testNumbers");
const { expect } = require('chai')

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('returns undefined if one of the inputs is not a number', () => {
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined)
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined)
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined)
        })
        it('works with positive and negative numbers', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00')
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00')
            expect(testNumbers.sumNumbers(-1, 2)).to.equal('1.00')
        })
        it('works with floatig point numbers', () => {
            expect(testNumbers.sumNumbers(1.23124, 1.1322)).to.equal('2.36')
        })
    })
    describe('numberChecker', () => {
        it('throws error if input is NaN', () => {
            try {
                testNumbers.numberChecker('#34jks')
            } catch (err) {
                expect(err.message).to.equal('The input is not a number!')
            }
        })
        it('returns even for even number',()=>{
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
        })
        it('returns odd for odd number',()=>{
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!')
        })
    })
    describe('averageSumArray',()=>{
        it('returns average sum from a valid array',()=>{
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2)
        })
    })
})