function solve(...args) {
    typesCoutn = {}
    for (ele of args) {
        type = typeof ele
        typesCoutn[type] = (typesCoutn[type]) ? typesCoutn[type] + 1 : 1
        if (!(type == 'object')) {
            console.log(`${typeof ele}: ${ele}`)
        } else {
            console.log(`${type}:`)
        }
    }
    for ([type, count] of Object.entries(typesCoutn).sort((a, b) => a[1] - b[1])) {

        console.log(`${type} = ${count}`)

    }

}


solve({ name: 'bob' }, 3.333, 9.999)

