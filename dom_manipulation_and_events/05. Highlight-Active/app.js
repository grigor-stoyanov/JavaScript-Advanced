function focused() {
    const fields = document.getElementsByTagName('input')
    for(let field of Array.from(fields)){
        field.addEventListener('focus',onFocus)
        field.addEventListener('blur',onBlur)

    }
    function onFocus(event){
        event.target.parentNode.className = 'focused'
    }
    function onBlur(event){
        event.target.parentNode.className = ''
    }
}