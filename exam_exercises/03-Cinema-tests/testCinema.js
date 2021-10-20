const { expect } = require("chai");

const { cinema } = require('./cinema.js')


describe('Cinema Tests',()=>{
    describe('showMoviesArray',()=>{
        it('returns message if array is empty',()=>{
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        })
        it('returns list of movies separated by ,',()=>{
            expect(cinema.showMovies(['movie1','movie2','test'])).to.equal('movie1, movie2, test')
        })
    })
    describe('ticketPrice',()=>{
        it('returns price of valid projection type',()=>{
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        })
        it('thorws error for invalid projection type',()=>{
            expect(() => cinema.ticketPrice('')).to.throw(Error,'Invalid projection type.')
        })
    })
    describe('swapSeatsInHall',()=>{
        it('change is unsuccessful',()=>{
            expect(cinema.swapSeatsInHall(1)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21,10)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1.5,'15')).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(10,10)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('change is successful',()=>{
            expect(cinema.swapSeatsInHall(10,5)).to.equal('Successful change of seats in the hall.')
        })

    })
})