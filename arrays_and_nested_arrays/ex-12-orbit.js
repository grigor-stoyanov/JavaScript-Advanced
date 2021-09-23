function orbit(data) {
    let rows = data[0], cols=data[1], x=data[2], y=data[3]
    mat = []
    for (let i = 0; i < rows; i++) {
        mat.push([])
        for (let j = 0; j < cols; j++) {
            mat[i].push(0)
        }
    }
    mat[x][y] = 1
    let counter = 0
    while (true) {
        counter += 1
        if (!(0 < x + counter < rows) && !(0 < y + counter < cols)) {
            mat[x + counter][y + counter] += counter
        }
        if (!(0 < x - counter < rows )&& !(0 < y - counter < cols)) {
            mat[x - counter][y - counter] += counter
        }
        if (!(0 < y + counter < cols)) {
            mat[x][y + counter] += counter
        }
        if (!(0 < y + counter < cols)) {
            mat[x][y - counter] += counter
        }
        if (!(0 < x + counter < rows)) {
            mat[x + counter][y] += counter
        }
        if (!(0 < x + counter < rows)) {
            mat[x - counter][y] += counter
        }
        if (!(0 < x + counter < rows) &&!( 0 < y + counter < cols)) {
            mat[x + counter][y - counter] += counter
        }
        if (!(0 < x + counter < rows) &&!( 0 < y + counter < cols)) {
            mat[x - counter][y + counter] += counter
        }
        if (counter > x && counter > y) {
            for (row of mat) {
                console.log(mat.join(' '))
            }
            break
        }
    }


}

orbit([4, 4, 0, 0])