class Circle {
    constructor(r){
        this.r = r
    }
    getArea(){
        return this.r**2*Math.PI
    }
    static getDiameter(){
        return 5
    }
}

console.log(Circle.prototype)
c = new Circle(5)
console.log(c)
// data is kept in the instance
// functionality in the prototype
console.log(c.hasOwnProperty('getArea'))
console.log(c.hasOwnProperty('r'))
console.log(Object.getPrototypeOf(c).hasOwnProperty('getArea'))
console.log(c.hasOwnProperty('getDiameter'))
console.log(Object.getPrototypeOf(c).hasOwnProperty('getDiameter'))
// constructor has a special property called prototype which is saved to the variable __proto__
// __proto__ keeps track of all methods attached to the instance along with its data
// constructor also is an object wich has his own __proto__
// every method can have its own __proto__ which points towards the object which has its __proto__ = null

// we can attach object funcionality before creating it
const myProto = {
    sayHi(){
        console.log(`${this.name} sayas hi`)
    }
}

const instance = Object.create(myProto)
instance.name = 'John'
instance.sayHi()

// extending functionality to built in fundamental object
console.log(Array.prototype)
Array.prototype.getLastIndex = function(){
    return this.length - 1
}

const arr = [1,2,3]
console.log(arr[arr.getLastIndex()])
// it is carried to all instances and inhereted classes
// __proto__-template   points at the prototype that has been set vs 
// prototype property of a function if your object is created by a constructor function/Objects dont have property
// prototype sets the __proto__ for your object