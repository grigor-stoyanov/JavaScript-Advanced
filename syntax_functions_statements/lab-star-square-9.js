function starSquare(a) {
    a = a || 5
    let row = ''
    for (let i = 0; i < a; i++){
        for (let j = 0; j < a; j++){
            row += '* '
        }
        console.log(row)
        row = ''
    }
}
starSquare()
starSquare(2)