function biggestEle(mat) {
    let max = mat.reduce(
        (acc, v) => {
            if (acc.sort((a, b) => a - b)[acc.length - 1] > v.sort((a, b) => a - b)[v.length - 1]) {
                return acc
            } else {
                return v
            }
        }
    )
    max = max[max.length-1]
    console.log(max)
}

biggestEle([[20, 50, 10],
[8, 33, 145]])
biggestEle([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])