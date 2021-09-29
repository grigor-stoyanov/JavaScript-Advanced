function solve() {
    // get value of number
    // get value of conversion
    // apply conversion algorithm based on switch statement
    // write value to output
    let number = Number(document.getElementById('input').value)
    let conversion = document.getElementById('selectMenuTo').value
    let converted
    switch(conversion){
        case 'binary':
            converted = number.toString(2)
            break
        case 'hexadecimal':
            converted = number.toString(16)
            break
    }
    document.getElementById('result').value = converted
}