// classes provide object structure
// they define their data,properties,atributes,and behaviour-methods
// one class may have many objects
// declarations of classes are not hoisted unlike functions!
// usually declaration of classes are in another file
class Circle {
    // constructor innitialises the object properties
    constructor(r,name){
        this.r = r
        this.name = name
    }
    spin(){
        console.log(`${this.name} is spinning`)
    }
    // static methods doesent have access to the instance
    static bounce(){
        console.log('bounces')
    }

    get diameter(){
        if (typeof value != 'number'){
            throw new TypeError('Diameter must be a number');
        }
        return this.r*2
    }
    set diameter(value){
        this.radius = value/2
    }
}
const myInstance = new Circle(10,'My circle')
console.log(myInstance) 
// this instance has an extra property color
myInstance.color = 'blue'
myInstance.spin()
const secondInstance = new Circle(5,'Your circle')
// unlike factory function class instances share the same reference for their methods
console.log(myInstance.spin === secondInstance.spin)
// every instance saves info for the class which it is from
console.log(myInstance instanceof Object)
console.log(myInstance instanceof Number)
console.log(myInstance instanceof Circle)
// static methods are called from the class
Circle.bounce()
// sorting objects
const circles = [myInstance,secondInstance]
circles.sort(Circle.compareTo)
console.log(circles)
// accessors 
const c = new Circle(4)
// in other to add a property based on an existig one or validating we use setters getters
console.log(c.diameter)
// get and set can have the same name
c.diameter = 5
console.log(c)
// the name of the getter or setter must be different than the property in the constructor
// otherwise we go into a recursion this is done by giving it _ before it's name
// DOM elements are class instances but created from factory functions from abstract classes HTMLElements,Node
// instead of new e.g createElement and come with useful methods and properties
// cloneNode(deep=true/false) create duplicate of selected element
// replacewith(ele) replace an element with another
// before() after() insert element before/after selected node
// classList readonly property returns collection of class attributes of DOMTokenList("container","div","root","value":"container div root")
// get,set,removeAtribute
// classes in html can be used to encapsulate elements and behaviour (refs to dom elements,event handlers,methods)
// Built in collections set/map weakset/weakmap
// map -stores in insertion order! with key-value pairs
const mymap = new Map()
console.log(mymap)
mymap.set(function myfunc(){},5) // key can be anything
// methods get(key),has(key),delete(),clear
for (let item of mymap){
    console.log(item[0],item[1])
}
const mymap = keys() // this is literala not array to turn we use ... operator
// to sort a map we need to transform into array first
// set -doesent store in insertion order and keys
// methods has() add() stores uniqiue values
// weakmap and weakset are collections which keep referent types in memory even if they are out-of-scope unused by current variables in the stack
   
