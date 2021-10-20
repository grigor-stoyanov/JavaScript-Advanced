class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }
    loadProducts(products) {
        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ')
            productQuantity = Number(productQuantity)
            productTotalPrice = Number(productTotalPrice)
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += productQuantity
                } else {
                    this.stockProducts[productName] = productQuantity
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
        return this.history.join('\n')
    }
    addToMenu(meal, products, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = { products, price }
            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
            return `reat idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }
    showTheMenu() {
        if (!Object.keys(this.menu).length) {
            return "Our menu is not ready yet, please come later..."
        }
        let result = []
        for (let meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`)
        }
        return result.join('\n')
    }
    makeTheOrder(meal) {
        if (this.menu[meal] == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        for (let product of this.menu[meal].products) {
            let [productName, productQuantity] = product.split(' ')
            productQuantity = Number(productQuantity)
             if(this.stockProducts[productName] == undefined ||
                 this.stockProducts[productName] < productQuantity){
                     return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                 }
        }
        for (let product of this.menu[meal].products){
            let [productName,productQuantity] = product.split(' ')
            this.stockProducts[productName] -= Number(productQuantity)
        }
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }

}
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log('-----------------')
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log('------------------')
console.log(kitchen.showTheMenu());
console.log('-------------------')
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));