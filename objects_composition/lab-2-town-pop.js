function town(list) {
    const town_dict = {}
    for (let ele of list){
        let [town_name,population] = ele.split(' <-> ')
        population = parseInt(population)
        town_dict[town_name] = town_dict[town_name] ? town_dict + population: population
    }
    for(let [key,value] of Object.entries(town_dict)){
        console.log(`${key}: ${value}`)
    }
}

town([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
town([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])