function buyFruit(fruit, weight, price) {
    weight /= 1000
    money = price*weight
    console.log(`I need \$${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

buyFruit('orange', 2500, 1.80)
buyFruit('apple',1563,2.35)