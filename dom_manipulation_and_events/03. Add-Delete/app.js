function addItem() {
    const input = document.getElementById('newItemText')
    const li = document.createElement('li')
    li.textContent = input.value
    document.getElementById("items").appendChild(li)
    input.value = ''

    const button = document.createElement('a')
    button.textContent  = '[Delete]'
    button.href = '#'
    li.appendChild(button)
    
    
    button.addEventListener('click',removeElement)
    function removeElement(ev){
        const parent = ev.target.parentNode
        parent.remove()
    }   
}