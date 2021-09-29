function search() {
   // select list as an array of html
   // select input field
   // cycle trough list and match each element with string
   // change style of each matched element
   // print number of mathes
   // add functionality to reset state on next click
   const towns = document.querySelectorAll('ul li')
   const text = document.getElementById("searchText").value
   let matches = 0
   for(let ele of Array.from(towns)){
      if (ele.innerHTML.includes(text)){
         ele.style.fontWeight = 'bold'
         ele.style.textDecoration = 'underline'
         matches ++;
      }else{
         ele.style.fontWeight = 'normal'
         ele.style.textDecoration = ''
      }
  }
   document.getElementById("result").textContent = `${matches} matches found`
}