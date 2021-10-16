(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + `${this}`
        }
        return `${this}`
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}` + str
        }
        return `${this}`
    }
    String.prototype.isEmpty = function () {
        if (this) {
            return true
        }
        return false
    }
    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return `${this}`
        }
        if (n < 4) {
            return '.'.repeat(n)
        }
        let truncated = this.split(' ')
        if (truncated.length > 1) {
            truncated.pop()
            while (truncated.length + 3 >= n) {
                truncated.split(' ')
                if (truncated.length == 1) {
                    return this.slice(0, n - 3) + '...'
                }
                truncated.pop()
                truncated.join(' ')
            }
            return truncated + '...'
        }
        else {
            return this.slice(0, n - 3) + '...'
        }
    }
    String.format = function (str, ...params) {
        p = /{[0-9]+}/i
        for (let ele of params) {
            str = str.replace(p, ele)
        }
        return str
    }
})()

let str = 'my string';
answer = str.ensureStart('my ')
console.log(answer)
answer = str.ensureStart('my ')
console.log(answer)