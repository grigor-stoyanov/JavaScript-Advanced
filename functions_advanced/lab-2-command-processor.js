function createProcessor() {
    let state = ''
    // privelleged fuctions can see their outer scope
    function append(str) {
        state += str
    }
    function removeStart(n) {
        state = state.slice(n)
    }
    function removeEnd(n) {
        state = state.slice(-n)
    }
    function print() {
        console.log(state)
    }
    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}
const processor = createProcessor()
processor.append('hello again')
processor.removeStart(3)
processor.removeEnd(4)
processor.print()