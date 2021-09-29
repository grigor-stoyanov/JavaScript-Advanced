function deleteByEmail() {
    table = document.querySelectorAll('tbody tr')
    email = document.getElementsByName('email')[0]
    removed = false
    for(row of Array.from(table)){
        
        if (row.lastElementChild.textContent.includes(email.value)){
            row.remove()
            removed =true
        }
    }
    if (removed){
        document.getElementById('result').textContent = "Deleted"
    }else{
        document.getElementById('result').textContent = 'Not found'
    }
}