function solve(n, k) {
    const arr = []
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            arr.push(1)
            continue
        }
        arr.push(arr.reduce((a, v, idx, ar) => {
            if (idx > ar.length - k) {
                a += v
                return a
            } else {
                return ar[idx]
            }
        }))
    }
    console.log(arr)
}
const rl1 = require('readline')
const rl2 = require('readline')
solve(rl1, rl2)
solve(8, 2)