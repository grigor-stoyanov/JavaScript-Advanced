function calc(){
    let result = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value)
    
    if (Number.isNaN(result)){
        window.alert('please input numbers!')
    }
    document.getElementById("sum").value = result
}