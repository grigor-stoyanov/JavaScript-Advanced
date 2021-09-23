function addRemove(commands) {
    let start = 1
    const arr = []
    for (let command of commands) {
        if (command == 'add') {
            arr.push(start)
        } else {
            if (command == 'remove') {
                arr.pop()
            }
        }
        start += 1
            
    }
    if (arr.length){

    console.log(arr.join('\n'))
    } else {
        console.log('Empty')
    }
}

addRemove(['add',
    'add',
    'add',
    'add']
)
addRemove(
    ['add',
        'add',
        'remove',
        'add',
        'add']

)
addRemove([
    'remove',
    'remove',
    'remove']

)