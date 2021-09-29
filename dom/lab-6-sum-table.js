function sumTable(){
    // select table
    const table = document.querySelectorAll('table tr')
    // select rows with only values
    // set value of id sum with sum
    // for every row find last cell and add value to sum
    let sum = 0
    for(let i=1;i<table.length-1;i++){
        const cell = Number(table[i].lastElementChild.textContent)
        sum += cell
    }
    document.getElementById("sum").textContent = sum
    
    
}