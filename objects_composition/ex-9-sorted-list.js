function createSortedList() {
    const isValid = (index) => 0 <= index && index < sortedList.size
    const sortedList = {
       
        customList: new Array(0),
        size: 0,
        add(element) {
            this.customList.push(element)
            this.customList.sort((a, b) => a - b)
            this.size += 1
        },
        remove(index){
            if (!isValid(index)){
                throw `Invalid index: ${index}`
            }
            this.customList.splice(index,1)
            this.size -= 1
        },
        get(index){
            if (!isValid(index)){
                throw `Invalid index: ${index}`
            }
            return this.customList[index]
        }

    }
    return sortedList
}




let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));