function biggerHalf(arr) {
    arr.sort((a, b) => a - b)
    console.log(arr.splice(-Math.ceil(arr.length/2)))
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])