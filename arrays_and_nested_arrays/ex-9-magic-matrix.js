function isMagic(mat) {
    let row_sum = mat[0].reduce((a,b)=> a+b)
    for (let row of mat) {
        let current_sum = row.reduce((a, b) => a + b)
        if (row_sum != current_sum) {
            return false
        }
        row_sum = current_sum
    }
    let current_sum = 0,col_sum = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            current_sum += mat[j][i]
        }
        if (i != 0 && col_sum != current_sum) {
            return false
        }
        col_sum = current_sum
        current_sum = 0
    }
    return true
};

console.log(
isMagic(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    )
)
console.log(
isMagic(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
    )
)