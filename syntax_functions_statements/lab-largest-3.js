function largest(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a)
        } else {
            if (c > b) {
                console.log(c)
            }
            else {
                console.log(b)
            }
        }
    } else {
        if (b > c) {
            console.log(b)
        } else {
            console.log(c)
        }
    }
}

function largest2(a, b, c) {
    console.log(Math.max(a,b,c))
}

function largest3(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    } else {
        if (b > c && b > a) {
            console.log(b)
        } else {
            console.log(c)
        }
    }
}

largest(4, 5, 3)
// interpolated string `the largest number is ${result}`