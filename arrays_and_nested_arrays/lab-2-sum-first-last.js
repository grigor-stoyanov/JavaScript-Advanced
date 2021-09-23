function firstLast(strings) {
    // makingg copy of it allows it to work with 1 element
    const first = Number([...strings].shift())
    const last = Number([...strings].pop())
    return first+last
    
}
console.log(firstLast(['20', '30', '40']))
console.log(firstLast(['5','10']))
console.log(firstLast(['25']))