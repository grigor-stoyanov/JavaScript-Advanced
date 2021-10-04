function filterEmployees(data,criteria){
    data = JSON.parse(data)
    criteria = criteria.split('-')
    data = data.filter(
        (v) => {
            if(v[criteria[0]] == criteria[1]) return v
        }
    )
    for (const [index,ele] of data.entries()){
        console.log(`${index}. ${ele.first_name} ${ele.last_name} - ${ele.email}`)
    }
}


filterEmployees(
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`, 
    'gender-Female'
)