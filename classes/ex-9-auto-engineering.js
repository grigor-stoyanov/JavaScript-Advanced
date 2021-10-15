function autoCompany(cars) {
    const brands = new Map()
    for (let car of cars) {
        let [brand, model, number] = car.split(' | ')
        number = Number(number)
        if (brands.has(brand)) {
            if(brands.get(brand).has(`###${model}`)){
                brands.get(brand).set(`###${model}`,brands.get(brand).get(`###${model}`)+number)
            }
            else{
            brands.get(brand).set(`###${model}`, number)
            }

        } else {
            const models = new Map()
            brands.set(brand, models.set(`###${model}`, number))
        }
    }
    for (let [brand, models] of brands.entries()) {
        console.log(brand)
        for (let [model, number] of models.entries()) {
            console.log(`${model} -> ${number}`)
        }
    }
}

autoCompany(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
)