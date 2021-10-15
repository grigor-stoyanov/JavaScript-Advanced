class Person{
    constructor(firstName,lastName,age,email){
        // we can also assign them using a literal and assign method
        Object.assign(this,{
            firstName,
            lastName,
            age,
            email
        })
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email
    }
    // overriding tostring method
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age} email: ${this.email})`
    }
}
const guy = new Person('John','Smith',23,'JohnSmith@abv.bg')
console.log(''+guy)