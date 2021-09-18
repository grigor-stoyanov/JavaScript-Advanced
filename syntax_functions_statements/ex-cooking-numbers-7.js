function cookingNumbers() {
    number = arguments[0]
    Array.from(arguments).forEach(element => {
        switch (element) {
            case 'chop':
                number = number / 2;
                console.log(number)
                break
            case 'dice':
                number = Math.sqrt(number);
                console.log(number)
                break;
            case 'spice':
                number += 1;
                console.log(number)
                break;
            case 'bake':
                number *= 3;
                console.log(number)
                break;
            case 'fillet':
                number -= number * 0.2;
                console.log(number)
        }    
    });
}
cookingNumbers(32,'chop','chop','chop','chop','chop')