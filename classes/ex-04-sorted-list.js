class List {
    constructor() {
        this.list = []
        this.size = 0
    }
    add(element) {
        if (this.list[this.size - 1] < element || !this.size) {
            this.list.push(element)
            this.size += 1
        } else {
            this.list.unshift(element)
            this.size += 1
        }
    }
    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1)
            this.size -= 1
        }
    }
    get(index) {
        if (index >= 0 && index < this.size) {
            return this.list[index]
        }
    }

}

let list = new List();
list.add(5);
list.add(3);
console.log(
list.get(0)
)