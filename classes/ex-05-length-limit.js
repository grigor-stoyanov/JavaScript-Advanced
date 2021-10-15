class Stringer {
    constructor(string, length) {
        this.innerString = string
        this.innerLength = length
    }
    increase(length) {
        this.innerLength = this._innerLength + length
    }
    decrease(length) {
        this.innerLength = this._innerLength - length
    }

    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0
        } else {
            this._innerLength = value
        }
    }
    toString() {
        if (this.innerString.length > this._innerLength) {
            return this.innerString.slice(0, this._innerLength) + '...'
        } else {
            if (this.innerLength == 0) {
                return '...'
            }
        }
        return this.innerString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test