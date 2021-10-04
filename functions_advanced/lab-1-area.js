/** 
 * @param {function} area
 * @param {function} vol
 * @param {string} input
*/


// abstract function strategy pattern with dependency injection 
function solve(area, vol, input) {
    const cubes = JSON.parse(input)
    const result = []
    for (let cube of cubes) {
        const cubeArea = area.apply(cube)
        const cubeVolume = vol.apply(cube)
        result.push({
            area: cubeArea,
            volume: cubeVolume
        })
    }
    console.log(result.join('\n'))
}
const data = `[{"x":"1","y":"2","h":"10"},{"x":7,"y":"7","h":"10"},{"x":5,"y":"2","h":"10"}]`

function area() {
    return Math.abs(this.x * this.y)
}
function vol() {
    return Math.abs(this.x * this.y * this.h)
}

solve(data)