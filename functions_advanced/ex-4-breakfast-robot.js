function solution() {
    recipies = {
        'apple': { 'carbohydrate': 1, 'flavour': 2 },
        'lemonade': { 'carbohydrate': 10, 'flavour': 20 },
        'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },
        'eggs': { 'protein': 5, 'fat': 1, 'flavour': 1 },
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 }
    }
    stock = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
        
    }

    function manager(input) {
        let [cmd, ele, qty] = input.split(' ')

        switch (cmd) {
            case 'restock':
                stock[ele] += Number(qty)
                return 'Success'
            case 'prepare':
                for (let i = 0; i < Number(qty); i++) {
                    for (const [microele, amount] of Object.entries(recipies[ele])) {
                        if (stock[microele] < Number(amount)) {
                            return `Error: not enough ${microele} in stock`
                        }
                    }
                }
                for (let i = 0; i < Number(qty); i++) {
                    for (const [microele, amount] of Object.entries(recipies[ele])) {
                        stock[microele] -= Number(amount)
                    }
                }
                return 'Success'
            case 'report':
                let result = []
                for ([key, value] of Object.entries(stock)) {
                    result.push(`${key}=${value}`)
                }
                return result.join(' ')
        }
    }


    return manager
}









let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"))
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare burger 1'))
console.log(manager('report'))