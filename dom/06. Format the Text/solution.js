function solve() {
  // get value from text area and split it into sentances
  sentances = document.getElementById('input').value.split('. ')
  output = document.getElementById('output')
  // add paragraphs to the output div for every 3 sentances
  for(let i = 0;i<sentances.length;i+=3){
    // create the paragraph by joining sliced array of sentances
    text = sentances.slice(i,i+3).join('. ') + '.'
    // create the paragraph tag insithe the div element
    output.innerHTML += `<p> ${text} </p>`
    }
}