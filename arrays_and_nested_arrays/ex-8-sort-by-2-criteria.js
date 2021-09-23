function sortBy2(arr) {
    arr.sort(
        (a, b) => {
            if (a.length - b.length == 0){
                if (a > b){
                    return 1
                } else {
                    return -1
                }
            } else {
               return a.length - b.length 
            }
        }
    )
    console.log(arr.join('\n'))
}



sortBy2([
    'alpha',
    'beta',
    'gamma'
])
sortBy2([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
])
sortBy2([
    'test',
    'Deny',
    'omen',
    'Default'
]
)