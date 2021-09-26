function calorieComposer(array) {
    const obj = {};
    for (let i = 0; i < array.length; i += 2) {
        obj[array[i]] = Number(array[i + 1])
    }
    console.log(obj)
}
calorieComposer(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieComposer(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])