function solution(array,type){
    switch(type){
        case 'asc':
            return array.sort((a,b) => a-b)
        case 'desc':
            return array.sort((a,b) => b-a)
    }
}

console.log(
solution([14, 7, 17, 6, 8], 'asc'),
solution([14, 7, 17, 6, 8], 'desc'))