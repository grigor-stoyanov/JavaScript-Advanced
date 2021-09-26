function jansNotation(input) {
    numbers = []
    for (let element of input) {
        if ((typeof element) == 'number') {
            numbers.push(element)
        }
        else {
            if (numbers.length < 2) {
                console.log("Error: not enough operands!")
                return
            }
            num2 = numbers.pop()
            num1 = numbers.pop()
            numbers.push(eval(`${num1}${element}${num2}`))
        }
    }
    if (numbers.length > 1) {
        console.log('Error: too many operands!')
        return
    }
    console.log(numbers[0])
    
    function applyOperation(operand1, operand2, operator) {
        const arithmeticOperator = {
            '+': () => operand1 + operand2,
            '-': () => operand1 - operand2,
            '*': () => operand1 * operand2,
            '/': () => operand1 / operand2,

        }
        return arithmeticOperator[operator]();
    }
}

jansNotation([
    31,
2,
    '+',
    11,
    '/'
])
jansNotation([
    5,
    3,
    4,
    '*',
    '-'
])
jansNotation([
    7,
    33,
    8,
    '-'
])
jansNotation(
    [
        15,
        '/'
    ])