function addItem() {
    newItemText = document.getElementById('newItemValue')
    newItemValue = document.getElementById('newItemText')
    menu = document.getElementById('menu')
    option = document.createElement('option')
    if (!newItemValue.value) {
        option.value = newItemValue.value
    }
    else {
        option.value = "Item value wasn't added"
    }
    if (!newItemText) {
        option.textContent = newItemText.value
    }
    else {
        option.textContent = "Item text wasn't added"
    }
    menu.appendChild(option)
    newItemText.value = ''
    newItemValue.value = ''
}