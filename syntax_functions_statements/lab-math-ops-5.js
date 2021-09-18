function solve(num1, num2, operator) {
    switch (operator) {
        case '*':
            console.log(num1 * num2)
            break
        case '**':
            console.log(num1 ** num2)
            break
        case '+':
            console.log(num1 + num2)
            break
        case '-':
            console.log(num1 - num2)
            break
        case '/':
            console.log(num1 / num2)
            break
        default:
            console.log('provide valid operator')
    }
}

solve(1,2,'/')