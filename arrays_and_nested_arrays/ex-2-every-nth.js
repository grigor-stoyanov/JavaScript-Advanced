function everyNth(arr, n) {
    const arr2 = []
    for (let i = 0; i < arr.length; i+=n) {
        arr2.push(arr[i])
    }
    return arr2
}

console.log(everyNth(['5',
    '20',
    '31',
    '4',
    '20'],
    2)
)