function createNameList(names) {
    names.sort((a, b) => a.localeCompare(b))
    for (let i = 1; i <= names.length; i++) {
        console.log(`${i}.${names[i - 1]}`)
    }
}


createNameList(["John", "Bob", "Christina", "Ema"])