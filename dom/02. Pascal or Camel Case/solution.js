function solve() {
  text = document.getElementById("text").value
  textArr = text.split(" ")
  namingConv = document.getElementById("naming-convention").value
  let result = ''
  switch (namingConv) {
    case 'Camel Case':
      textArr[0] = textArr[0].toLowerCase()
      for (let i = 1; i < textArr.length; i++) {
        textArr[i] = textArr[i].toLowerCase()
        textArr[i] = textArr[i][0].toUpperCase() + textArr[i].slice(1)
      }
      result = textArr.join('')
      break
    case 'Pascal Case':
      for (let i = 0; i < textArr.length; i++) {
        textArr[i] = textArr[i].toLowerCase()
        textArr[i] = textArr[i][0].toUpperCase() + textArr[i].slice(1)
      }
      result = textArr.join('')
      break
    default:
      result = 'Error!'
  }
  document.getElementById("result").innerHTML = result
}