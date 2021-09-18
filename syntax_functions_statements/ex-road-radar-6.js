function roadRadar(speed, area) {
    area_dict = { 'motorway': 130, 'interstate': 90, 'city': 50, 'residential': 20 }
    speed_limit = area_dict[area]
    if (speed <= speed_limit) {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`)
    } else {
        difference = speed - speed_limit
        if (difference <= 20) {
            var status = 'speeding' 
        } else {
            if (difference <= 40) {
                var status = 'excessive speeding'
            } else {
                var status = 'reckless driving'
            }
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - ${status}`)
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(280, 'motorway')