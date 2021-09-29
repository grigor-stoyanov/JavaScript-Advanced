function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      // extract all rows of table exept first row
      table = document.querySelectorAll('tbody tr')
      // extract value of search filter
      search = document.getElementById('searchField').value
      // cycle trough every table row and filter only ones that match
      for (const row of Array.from(table)){
         for(const cell of Array.from(row.querySelectorAll('td'))){
            if (cell.textContent.includes(search)){
               // highlight current row
               row.className = 'select'
               break
            }
            // unselect the row for next filter
            else{
               row.className = ''
            }
         }
      }
   }
}