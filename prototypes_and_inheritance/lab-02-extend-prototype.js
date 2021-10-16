class Person{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    toString(){
        // this.constructor.name == Class Name
        let className = this.constructor.name
        return `${className} (name: ${this.name} email: ${this.email})`
    }
}
function extend(classDefinition){
    classDefinition.prototype.species = 'Human'
    classDefinition.prototype.toSpeciesString = function (){
        return `I am a ${this.species}. ${this.toString()}`
    }
}
extend(Person)
let p = new Person("Pesho","email@hit.bg")
console.log(p.species)
console.log(p.toSpeciesString())