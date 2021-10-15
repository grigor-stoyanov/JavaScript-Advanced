function juiceFlavors(juices) {
    const bottles = new Map()
    const juiceMap = new Map()
    for (let juice of juices) {
        let [flavor, qty] = juice.split(' => ')
        qty = Number(qty)
        if (juiceMap.has(flavor)) {
            juiceMap.set(flavor, (juiceMap.get(flavor) + qty))
        } else {
            juiceMap.set(flavor, qty)
        }
        if (juiceMap.get(flavor) > 1000){
            if (!bottles.has(flavor)) {
                bottles.set(flavor, Math.floor(juiceMap.get(flavor)/1000))
                juiceMap.set(flavor, juiceMap.get(flavor)-1000*(Math.floor(juiceMap.get(flavor)/1000)))
            }
            else {
                bottles.set(flavor, bottles.get(flavor) + Math.floor(juiceMap.get(flavor)/1000))
                juiceMap.set(flavor, juiceMap.get(flavor)-1000*(Math.floor(juiceMap.get(flavor)/1000)))
            }
        }
    }
    for (let [juice, bottle] of bottles.entries()) {
        if (bottle != 0) {
            console.log(`${juice} => ${bottle}`)
        }
    }
}

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
