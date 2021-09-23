function equalNeighbours(mat) {
    let count = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (i < mat.length - 1) {
                if (mat[i][j] == mat[i + 1][j]) {
                    count += 1
                }
            }
            if (mat[i][j] == mat[i][j + 1]) {
                count += 1
            }
        }
    }
    console.log(count)
}
equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
equalNeighbours(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
)