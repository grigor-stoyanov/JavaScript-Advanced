/* objects are a collections of fields called properties,
a property being a key to a value like a dictionary,mapping in python*/
const dict = {
    'a': 5,
    'b': 6
}
console.log(dict)
// lab 1
function city(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        sayHi: function () {
            console.log('Say Hi!')
        },
        sayHi2() {
            console.log(`${this.name} Says Hi!2`)
        }
    };
    return result
}
const myCity = city('varna', 500000, 1500000)
console.log(myCity)
console.log(myCity.name)
console.log(myCity['population'])
delete myCity.treasury
console.log(myCity)
const { name, population } = city('burgas', 259999, 599999)
console.log(population)
// iterating over an object used as a hash-map/dictionary
// the data must be associative and of the same type e.g. telephone book
for (const key in myCity) {
    console.log(key)
}
console.log(Object.keys(myCity))
console.log(Object.values(myCity))
// if we want tuple (usually used for sorting)
console.log(Object.entries(myCity))
// methods are functions stored as properties to the object
// function library - static Object with only methods e.g. Math,Object,Number
const compareNumbers = {
    ascending: (a, b) => (a - b),
    descending: (a, b) => (b - a)
}
myCity.sayHi()
// execution context is for functions is given with keyword this
// this points towards the instance of the object from which the method was called 
// when passed in a function within that object
myCity.sayHi2()
// function context however can be changed at runtime
const mySayHi = myCity.sayHi2
// executing the function will throw an error unless we give it context of an object
person = { name: 'george' }
person.mySayHi = mySayHi
person.mySayHi()
// it will also copy the same reference
console.log(person.mySayHi === myCity.sayHi2)
// composition combining objects into complex ones (objects containing referent types functions,other objects..)
let student = {
    name: 'maria',
    age: 22,
    data: {
        location: { lat: 123, lon: 234 }
    }
}
//console.log(student)
//console.log(student.location.lon)
// composition helps reuse code and add functionality at runtime is superior to inheritance
// destructuring
// multiple inheritence in non dynamic languages like c# or java due to untracable errors whith implementing functionality
// in javascript composition solves that
// destruct the object take the data property and find location can be applied to arrays
const { data: { location } } = student
console.log(location)
// factory functions compose and return objects and help to avoid using this
function createRect(width, height) {
    const rect = {
        width,
        height
    }
    rect.getArea = () => {
        return rect.width * rect.height;
    }
    return rect
}
// decorators in js accept ref of the object and modify it at runtime
// they are functions that add new data and behaviour to obbjects
function canPrint(device) {
    device.print = () => {
        console.log(`${device.name} is printing`)
    }
}
const printer = { name: 'ACME printer' }
canPrint(printer)
printer.print()
// JSON is data interchange(like xml) format javascript object notation
// language independant string format self describing
// like javascript objects with key,values,arrays only "" allowed and keys always in ""
const jsnstring = '{"employees":[{ "first name": "john", "last name": Doe }]}'
const object = JSON.parse(jsnstring)
const asJson = JSON.stringify(object)
