function customSort(arr) {
    arr.sort((a, b) => b - a);
    new_arr = []
    for (let i = 0; i < arr.length/2; i++){
        new_arr.push(arr[arr.length - i - 1],arr[i])
    }
    if (arr.length % 2 != 0) {
        new_arr.pop()
    }
    return new_arr
}

customSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
customSort([1, 2, 3, 4])
customSort([1,2,3,4,5])