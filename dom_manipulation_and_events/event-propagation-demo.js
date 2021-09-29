document.getElementById('items').addEventListener('click',removeElement)
 
 // this works with 1 event listener not a bunch of listeners!
 // if we don't click on anchor target returns the li element!

 function removeElement(ev){
     if (ev.target.tagName == 'A'){
        const parent = ev.target
        parent.remove()
     }
}   


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
    
    
   
   
}