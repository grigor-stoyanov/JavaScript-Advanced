function sortCatalogue(arr) {
    arr.sort()
    dict = {}
    arr.forEach(element => {
        index = element[0]
        if (dict[index]){
            dict[index].push(element.split(' : '))
        }else{
            dict[index] = [element.split(' : ')]
        }
    });
    for([letter,items] of Object.entries(dict)){
        console.log(letter)
        for(item of items){
            console.log(`  ${item[0]}: ${item[1]}`)
        }
    }
}
sortCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])
sortCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)