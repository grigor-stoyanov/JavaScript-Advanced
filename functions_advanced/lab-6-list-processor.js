function solve(commands) {
    let arr = []
    function add(value) {
        arr.push(value)
    }
    function remove(value) {
        arr = arr.filter((v) => {
            !(v == value)
        })
    }
    function print() {
        console.log(arr.join(','))
    }
    for (const command of commands) {
        [func, arg] = command.split(' ')
        eval(`${func}('${arg}')`)
    }
}

solve(
    [
        'add hello',
        'add again',
        'remove hello',
        'add again',
        'print'
    ]

)