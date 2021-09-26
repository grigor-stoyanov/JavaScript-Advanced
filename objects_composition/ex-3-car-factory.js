function carAssembler(requirements) {
    engines = [
        { power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }
    ]
    carriages = {
        'hatchback': { type: 'hatchback', color: undefined }, 'coupe': { type: 'coupe', color: undefined }
    }
    if (requirements.power <= 90 || requirements.volume <= 1800) {
        requirements.engine = engines[0]
    } else {
        if (requirements.power <= 120 || requirements.volume <= 2400) {
            requirements.engine = engines[1]
        } else {
            requirements.engine = engines[2]
        }
    }
    delete requirements.power
    delete requirements.volume
    requirements.carriage = carriages[requirements.carriage]
    requirements.carriage.color = requirements.color
    delete requirements.color
    requirements.wheelsize = requirements.wheelsize % 2 == 1 ? requirements.wheelsize : requirements.wheelsize - 1
    wheels = new Array(4).fill(requirements.wheelsize,0,4)
    requirements.wheels = wheels
    delete requirements.wheelsize
    return requirements
}

carAssembler({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})

carAssembler({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})