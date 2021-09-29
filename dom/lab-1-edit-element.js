// run is browser console with edit(global variable of html file, string to replace, substitute)
function edit(element,match,replacer){
    const text = element.textContent
    element.textContent = text.replaceAll(match,replacer)
}