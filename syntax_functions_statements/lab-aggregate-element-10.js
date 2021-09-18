function arrayOps(array) {
    // array = eval(array)
    let arraySum = 0
    let inverseSum = 0
    let concatArray = ''
    for (let i = 0; i < array.length; i++){
        arraySum += array[i]
        inverseSum += 1 / array[i]
        concatArray += array[i]
    }
    console.log(arraySum)
    console.log(inverseSum)
    console.log(concatArray)
}

arrayOps([1,2,3])