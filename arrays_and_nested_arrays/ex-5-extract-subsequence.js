function extract(arr) {
    const subsequence = []
    arr.push(Number.MAX_VALUE)
    arr.reduce(
        (a, v) => {
            if (a <= v) {
                subsequence.push(a)
                return v
            } else {
                return a
            }
        }
    )
    return subsequence
}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])
)
console.log(extract([1,
    2,
    3,
    4])
)
console.log(extract([20,
    3,
    2,
    15,
    6,
    1])
)