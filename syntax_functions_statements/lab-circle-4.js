function circleArea(radius) {
    let area = radius ** 2 * Math.PI
    if (typeof(radius) == 'number'){
        console.log(Math.round(area * 100) / 100)
        console.log(Number(area.toPrecision(2)))
    } else {
        console.log(`error: radius given is a ${typeof(radius)}`)
    }
}
circleArea(4)
circleArea('asd')