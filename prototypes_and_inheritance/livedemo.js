// prototype is just a type of class inheritence
// internal object properties
// every object field/property/ has four properties(settings)
// Enumerable (for in loop) -> object.keys*
// Configurable - can modify the behaviour of property e.g. delete
// Writable - modify and update value
// Value - access the value

const person ={
    name: 'Peter',
    age: 29
}

console.log(person)
console.log(Object.getOwnPropertyDescriptors(person))


// defineProperty(used to change property settings)
// once configurable is set to false it can no longer be configured even trough define property
console.log(Object.defineProperty(person,'lastName',{
    value:'Jackson',
    writable:true,
    enumerable:false,
    configurable:true
}))
// lastname property isnt accessible by looping trough or printing the object but trough accessor .
// also non enumerable objects wont be serialised when JSON stringified
// copying with object.assign() will also skip trough non-enumerable objects
for (let key in person){
    console.log(key,'->',person[key])
}
console.log(person.lastName)
// Object.preventExtentions() prevends modifying further instances of the class
// we can't have (get, set) and value together
Object.defineProperty(person,'lastName',{
    get(){
        return this._lastName || ''
    },
    set(value){
        this._lastName = value
    },
    enumerable:true,
    configurable:false
})
console.log(person)
console.log(person.lastName)
person.lastName = 'Johnson'
console.log(person.lastName)
// Object.seal() prevents new properties being addded and makes current ones non-configurable but u can still change values
// Object.freese() frosen objects cannot be changed at all
// inheritence single A->B multilevel A->B->C Hierarchal A->B A->C taboo-works only with composition in js Multiple A->C B->C
// Prototype - Object delegation
// Parent element keeps the functionality which is passed on to its children
// every object has __proto__ the template from which we created the object
// every protperty is search within the instance first then the prototype
// e.g. my_obj.hasOwnProperty('name') == true
// it allows u to add new properties to object constructors
function Rectangle(width,height){
    // constructor function composing an object
    // works like constructor in class
    this.width = width
    this.height = height
}
Rectangle.prototype.area = function(){
    return this.width*this.height
}
let rect = new Rectangle(3,5)
// Object creation Lietral, Constructor - allows implicit reference(prototype) __protiotype__link
// traditional classes are a design pattern
// creating classes means creating copies instantiating copies class into instance,inheritence child from parent
// object composition is preferred
// classes can inherit other classes
class Person{
    constructor(name,email){
        this.name = name
        this.email = email
    }
}
class Student extends Person{
    constructor(name,email,grade){
        // Person.call(this,name,email)
        super(name,email)
        this.grade = grade
    }
}
// by inheriting instances of the child are also instances of the parent!
// prototypal inheritence does not create copies and its its live changes in parent change the child
// delegates not blueprints shares keys/values by reference
