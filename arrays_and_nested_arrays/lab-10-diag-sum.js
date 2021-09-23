function diagSum(mat) {
    let primeDiag = 0
    let secondDiag = 0
    for (let row = 0; row < mat.length; row++) {
        primeDiag += mat[row][row]
    }
    for (let row = 0; row < mat.length;row++) {
        secondDiag += mat[row][mat.length-1-row]
    }
    console.log(primeDiag,secondDiag)
}

diagSum([[20, 40],
    [10, 60]])
diagSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])
