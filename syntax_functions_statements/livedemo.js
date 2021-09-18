/* JS is a  high level(away from the technology) programing language
enabaling interactive web pages,core technologies,executable both
server and client side, C-like syntax,Dynamic typing,Multi-paradigmn(imerative,function,OOP)
operations done at compilation can be done at runtime(adding properties,methods,changing variable type)
it can be run in the browser!*/
console.log('Hello JS!');
let a = 5;
/* runtime interpretator for js is node.js it is the env from which the code is run
like python-anaconda,java-oracle,c#-built in from windows,in browser also implemented-chromium
node packet manager  allows downloading ready modules like python pip
*/
let b = 3;
console.log(a + b);
// js has 7 primitive data types and 1 ref
// String,Number(double64bitfloatingpoint and no integer division 5//2=2,5)
// boolean(true/false),Undefined(auto assigned to vars),Null(intentional absense of object VALUE)
// BigInt endless integers like python,Symbol - unique and immutable
// Referent type - Object(Array,Function,...)
console.log(`interpolated string`);
console.log("Hello js");
const int_b = 58340923469083n;
console.log(int_b + BigInt(288409502489))
// new Symbol('asf')
array = []
objects = {}
// identifiers are variable names valid names contain unicode $ _ digits but not at start
//  stack is fixed type of memory containing the functions and variables until they need to be executed in the right order a = b makes 2 variables of same value
// heap is type of memory where an object can point towards the same reference a = b changes in a reflect on b
//Scopes Global,Block,Local(functional)
// js has dynamic typing but is considered bad practice
// regular declaration with global scope
function walk() {
    console.log('waking')
}
// block scope function saved in variable
const walk2 = function () {
    console.log('walking')
}
// arrow lambda fuction
const walk3 = () => {
    console.log('wawlking')
}
    
// there is no function overloading
// but you can call a function with less attributes than declared makingn the rest undefined
console.log(typeof (3 + '53'))
console.log(typeof ('53' + 3))
// we can compare values of different types
console.log('3' != 3)
console.log('3' !== 3)
// falsy values false,null,undefined, NaN(not a number),0,0n,""
// parsing a string to a number
let f = Number('5*asd') // returns NaN
// logical operators && - AND || - OR
// && returns the first falsy or last truthy element
// and || returns the first truthy or last falsy
console.log(false || 5 || '')
// loops for/while for-in for-of
// executable in <script>for (let i = 1;i<=10;i++){document.write(`<p>${i}</p>`)}}</script>
// strict mode activates with header 'use strict';
// functions can be parameters of other functions
function running() {
    return 'running'
}

function category(run, type) {
    console.log(`${run()} ${type}`)
}

category(running, 'sprint')
// hoisting is remembering of the elements in the program by the interpretator functions and var are hoisted to the top and executed when called,assigned
