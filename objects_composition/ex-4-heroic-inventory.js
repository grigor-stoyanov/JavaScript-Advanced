function heroesInv(input){
    let result = []
    for (const iterator of input){
        let [name,level,items] = iterator.split('/')
        name = name.trim()
        level = Number(level)
        items = items ? items.split(', '): []
        items = items.map((ele) => ele.trim())
        result.push({name,level,items})
    }
    console.log(JSON.stringify(result))
}
heroesInv(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])
heroesInv(['Jake / 1000 / Gauss, HolidayGrenade'])