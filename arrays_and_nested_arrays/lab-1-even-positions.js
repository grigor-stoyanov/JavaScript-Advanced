function evenPosition(strings) {
    let result = []
    for (let i = 0; i < strings.length; i+=2){
        result[result.length] = strings[i];
    }
    console.log(result.join(' '))
}
evenPosition(['20','30','40','50','60'])