function city(name,population,treasury)
    const result = {
        name,
        population,
        treasury
    }
    return result
}
const myCity = city('varna',500000,1500000)
console.log(myCity)
console.log(myCity.name)
console.log(myCity['population'])