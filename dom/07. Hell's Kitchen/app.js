function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      /* get value from text area input and update 
      all restaurants added more than once*/
      input = eval(document.querySelector('textarea').value)
      const restaurants = {}
      for (const ele of input) {
         let [restaurant, workers] = ele.split(' - ')
         workers = workers.split(', ')
         if (restaurants[restaurant] != undefined) {
            restaurants[restaurant].push(...workers)
         } else {
            restaurants[restaurant] = workers
         }
      }
      // calculate the average salary of each restaurant and find the best 
      let bestAvgSalary = Number.MIN_SAFE_INTEGER, avgSalary = 0
      let bestRestaurant = ''
      for (let [key, value] of Object.entries(restaurants)) {
         for (let item of value) {
            let [name, salary] = item.split(' ')
            avgSalary += salary / value.length
         }
         if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary
            bestRestaurant = key
         }
         avgSalary = 0
      }
      // sort best restaurant workers by salary and get greatest
      bestRestaurantWorkers = restaurants[bestRestaurant].map(
         (x) => {
            let [name, salary] = x.split(' ')
            salary = Number(salary)
            return [name, salary]
         }
      )
      bestRestaurantWorkers.sort((a, b) => b[1]-b[1])
      bestSalary = bestRestaurantWorkers[0][1]
      // output best restaurant and all it's workers
      document.getElementById('bestRestaurant').lastElementChild.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
      let result = []
      for (let worker of bestRestaurantWorkers){
         result.push(`Name: ${worker[0]} With Salary: ${worker[1]}`)
      }
      document.getElementById('workers').lastElementChild.textContent = result.join(' ') 
   }
}