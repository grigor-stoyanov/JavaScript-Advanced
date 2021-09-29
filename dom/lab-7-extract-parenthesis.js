function extract(content){
    const text = document.getElementById(content).textContent
    const pattern = /\((.+?)\)/g
    // regex function like iterator
    let match = pattern.exec(text)
    result = ''
    while (match!=null){
        result += match[1]
        result += '; '
        match = pattern.exec(text)
    }
    return result
}