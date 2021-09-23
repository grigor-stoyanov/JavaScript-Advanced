function diagonalAttack(mat) {
    let prime_sum = 0, second_sum = 0
    const prime_diag = [], second_diag = []
    const new_mat = []
    for (let ele of mat) {
        new_mat.push(ele.split(' ').map(x => parseInt(x)))
    }
    mat = new_mat
    for (let i = 0; i < mat.length; i++) {
        prime_sum += mat[i][i]
        second_sum += mat[i][mat.length - i - 1]
        prime_diag.push(mat[i][i])
        second_diag.push(mat[i][mat.length - i - 1])
    }
    if (prime_sum != second_sum) {
        for (row of mat) {
            console.log(row.join(' '))
        }
    } else {
        for (let row of mat) {
            row.fill(prime_sum)
        }
        for (let i = 0; i < mat.length; i++) {
            mat[i][i] = prime_diag[i]
            mat[i][mat.length - i - 1] = second_diag[i]
        }
        for (row of mat) {
            console.log(row.join(' '))
        }
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)
console.log('*************')

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']
)