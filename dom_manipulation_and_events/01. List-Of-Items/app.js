function addItem() {
    // select input field and read value
    // create new <li> element and set its content to input value
    // select <ul> and append new <li> element
    // nice to have: clear field
    const input = document.getElementById('newItemText')
    const li = document.createElement('li')
    li.textContent = input.value
    document.getElementById("items").appendChild(li)
    input.value = ''
}