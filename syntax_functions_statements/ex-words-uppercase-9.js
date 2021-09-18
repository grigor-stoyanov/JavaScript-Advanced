

function wordsUppercase(string) {
    let re = /[\w']+/g;
    let array = string.match(re);
    for (let i = 0; i < array.length;i++){
        array[i] = array[i].toUpperCase()
    };
    console.log(array.join(', '))
}

wordsUppercase('Hi, how are you')