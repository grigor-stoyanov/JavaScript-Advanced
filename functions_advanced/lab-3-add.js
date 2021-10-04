/**
 * 
 * @returns {function}
 */

function solution(number) {
    let funcName = `add${number}`
    let f = (param) => {
        number = Number(number)
        param = Number(param)
        return param + number
    }

    Object.defineProperty(f, 'name', { value: funcName, writable: true })
    return f
}



let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));