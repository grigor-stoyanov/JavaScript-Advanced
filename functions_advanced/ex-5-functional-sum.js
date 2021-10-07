function add(num) {
    let sum = num
    function addF(nextNum) {
        sum += nextNum
        return addF
    }
    addF.toString = function () {
        return sum
    }
    return addF

}

console.log(add(1)(6)(-3).toString())