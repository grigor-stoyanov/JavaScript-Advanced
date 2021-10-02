function create(words) {
   // create event listener and attach it to the main content div
   // create a div for each string input within content div innitially hidden
   // the click event should display hidden text paragraph of each div
   var c = document.getElementById('content')
   c.addEventListener('click', onClick)
   for (ele of words) {
      const d = document.createElement('div')
      c.appendChild(d)
      const p = document.createElement('p')
      d.appendChild(p)
      p.textContent = ele
      p.style.display = 'none'
   }
   function onClick(ev) {
      for (ele of Array.from(c.children)) {
         if (ele == ev.target) {
            ev.target.children[0].style.display = 'block'
            break
         }
      }
   }

}