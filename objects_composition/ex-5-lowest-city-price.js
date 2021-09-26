function findLowest(input) {
    let catalogue = {}
    input.forEach(element => {
        let [town, product, price] = element.split(' | ')
        price = Number(price)
        if (!catalogue[product]) {
            catalogue[product] = {}
        }
        catalogue[product][town] = price
    });
    for (const [key,value] of Object.entries(catalogue)) {
        [bestTown,bestPrice] = Object.entries(value).sort((a, b) => a[1] - b[1])[0]
        console.log(`${key} -> ${bestPrice} (${bestTown})`)
    }
}

findLowest(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
)