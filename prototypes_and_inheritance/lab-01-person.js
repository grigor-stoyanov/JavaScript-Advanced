function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: ''
    }
    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            const [first, last] = value.split(' ')
            if (first != undefined && last != undefined) {
                this.firstName = first
                this.lastName = last
            }
        },
        configurable: true,
        enumerable: true
    })
    return result

}
const person1 = createPerson('peter', 'ivanov')
console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.fullName)
person1.firstName = 'john'
console.log(person1.fullName)
person1.fullName = 'nIKOLA tesla'
console.log(person1.fullName)
