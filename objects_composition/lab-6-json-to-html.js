function fromJSONToHTMLTable(input){
    const obj_arr = JSON.parse(input);
    for (obj of obj_arr){
        console.log(obj);
    };
}










studentsJson =
    `[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
studentsJson2 =
    `[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
fromJSONToHTMLTable(studentsJson)
fromJSONToHTMLTable(studentsJson2)