const { expect } = require('chai')
const rgbToHexColor = require('./rgb')
describe('RGB converter',()=>{
    it('converts white',()=>{
        expect(rgbToHexColor(255,255,255).to.equal('#FFFFFF'))
    })
    it('converts to black',()=>{
        expect(rgbToHexColor(0,0,0).to.equal('#000000'))
    })
    it('converts to blue',()=>{
        expect(rgbToHexColor(35,60,101)).to.equal('#234465')
    })
})
describe('invalid parameters',()=>{
    
})