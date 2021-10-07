function calculator() {
    calculatorObj = {
        init: function (num1, num2, result) {
            calculatorObj.num1 = document.querySelector(num1)
            calculatorObj.num2 = document.querySelector(num2)
            calculatorObj.result = document.querySelector(result)
        }
        ,
        add: function () {
            this.result.value = Number(this.num1.value) + Number(this.num2.value)
        }
        ,
        subtract: function(){
            this.result.value = Number(this.num1.value) - Number(this.num2.value)
        }
    }
    return calculatorObj
}






const calculate = calculator();
calculate.init('#num1', '#num2', '#result')