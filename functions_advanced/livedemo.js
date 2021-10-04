// execution context = this
// the same function with different context can do different things
// depends on how function is invoked
// global func() this -> global == window
// object.fucn() this -> obj
// eventListener() this -> event.target

function contextPrinter(a, b) {
    console.log(this)
}
function myFunc() {
    contextPrinter()
}
const myobj = {
    name: 'Peter',
    contextPrinter
}
/*
myobj.contextPrinter()
myFunc()
document.querySelector('button').addEventListener('click',contextPrinter)
// deletes the context we've given
document.querySelector('button').addEventListener('click',myobj.contextPrinter)
*/
// call apply bind functions to select context!
contextPrinter.apply(myobj, [11, 5])
contextPrinter.call(myobj, 11, 6)
// bind copies the fucntion but changes the context
const boundFucn = contextPrinter.bind(myobj)
// every function has its own context it doesent matter if it is inside another function it will still be in the global scope
// unless its an arroww fucntion they are automatically binded to their parent!
// js functions are first-class treated like any other variable
// they can also be returned by other functions
// functions that takes a param func or returns one is a higher order func
// predicat is bool based returns true/false
// most built in array functions are high order
// pure function has the same result for given parameters independant of state of systm
// referential transparency expression can be replaced by value e.g x+ sqrt(4) == x+2
function myFunc2(a,b){
    return a+b
}
myVar = myFunc2
function createIncrementer(){
    function increment(a){
        return a + 1
    }
    return increment
}
const myIncrementer = createIncrementer()
console.log([1,2,3].map(myIncrementer))

let counter = 0
function increment2(){
    counter += a
    console.log(counter)
}
// not pure because returns diffferent result!
increment2(2)
increment2(2)
increment2(2)


// we keep reference of the function and the coutner data
// interpreter takes all local variables to live indempendantly in the heap
// this is called a closure!
function start(){
    let counter = 0
    function increase(a){
        counter+=a
        console.log(counter)
    }
    return increase
    /*
    increase(2)
    increase(2)
    */
}
const myIncrease = start()
myIncrease(2)
// it can save us time walking the dom instead we have access to elements declared in outer function
// applies to furniture lab Dom Manipulation exercise
// Legacy IIFE imediately invoked exprecions declared and ran at declaration
(function(){let name='peter'})() // immediately eveoked function expressions
// variable not accessible from outer scope returns error
console.log(name)



// decorating functions
function pow(a,b){
    return Math.pow(a,b)
}
// partial applicatoin decorate a function saving the variable
const sqr = (a) => pow(2,b)
console.log(pow(2,4))
console.log(pow(2,5))
// can be done using bind also
const cube = pow.bind(null,3)

// currying technique for decomposition
// when we dont have access to all parameters at once
function sum3(a){
    return (b) => {
        return (c) =>{
            return a+b+c
        }
    }
}
// we recall the function until param arrives
console.log(sum3(3)(4)(5))