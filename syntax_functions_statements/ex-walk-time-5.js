function travelTime(steps, foot, speed) {
    distance = foot * steps
    time = ((distance/1000) / speed)*60
    time += Math.floor(distance / 500)
    d = new Date()
    d.setHours(Math.floor(time / 60))
    d.setMinutes(Math.floor(time % 60))
    d.setSeconds(Math.round((time % 1) * 60))
    hours = String(d.getHours())
    if (hours.length < 2) {
        hours = '0'+hours
    }
    console.log(`${hours}:${d.getMinutes()}:${d.getSeconds()}`)
}

travelTime(4000, 0.60, 5)
travelTime(2564, 0.70, 5.5)