/*arrays are list-like objects of a reference type pointing
to an address in memory array literal (declaring with a value)*/
let numbers = [10, 20, 30, 40, 50]
// length or types of elements are not fixed
// but you can put elements in different indexes and leave others empty
const myArr = [10, 20, 30, 40]
console.log(myArr)
console.log(myArr[1])
console.log(myArr[myArr.length - 1])
// returns undefined and not an error
console.log(myArr[8])
console.log(myArr.length)
myArr[10] = 'asd'
console.log(myArr.length)
console.log(myArr)
// adding invalid indexes gives the array object a new property
myArr[-1] = 67
console.log(myArr)
// iterating over ann array
for (let item of myArr) {
    console.log(item)
}
// arrays in js have behaviour of list,stack and que
// for of can be broken with break unlike for each
// destructuring syntax to unpack values from the array
const arr = [10, 20, 40, 50, 60, 70, 80]
const firstele = arr[0]
const secondele = arr[1]
// instead of declaring individually we can declare them at once
const [first, second, ...rest] = arr
console.log(first, second, rest)
console.log(firstele, secondele)
// array methods pop(),push(),shift()-popleft,unshift()-appendleft
// to rotate we can use a combinaion of push and shift
console.log(arr)
arr.push(arr.shift())
console.log(arr)
arr.unshift(arr.pop())
console.log(arr)
// slicing of array
let nums = [1, 2, 3, 4, 5]
// splice(startindex,number of elements to delete,...rest to add)
removed = nums.splice(1, 2)
console.log(nums)
console.log(removed)
// adding elements without deleting
nums.splice(1, 0, 35, 36, 37, 38)
console.log(nums)
// fill(0,2,4) fill with 0 from pos 2 to pos 4
// reverse()
// sort()
const newarr = [8, 1, 13, 3, 5, 7]
newarr.sort(compareNums)
// by deffault it sorts by ascii [1,13,3,5,7,8]
console.log(newarr)
function compareNums(a, b) {
    if (a > b) {
        return b - a
    }
}
// with a lambda function
// const compareStrings = (c,d) => c.localeCompare(d)
// newarr.sort((a, b) => b - a)
// newarr = ['george', 'Peter', 'Marry', 'John']
// newarr.sort(compareStrings)
// console.log(newarr)


// acccessor methods
// concat() adding 2 or more arrays into a new one
// slice() copies a shallow portion of an array into a anew array
//slice(-3) will return last 3 elements!
// includes() true or false weather something is in the array from a certain point if chosen
// indexOf() returns first index of given element or -1 
// lastIndexOf()
// forEach() executes a provided function once for each element on array
// map creates a new array from the result calling the function of each!
// some() at leaast 1 element passes test of function returns true
// arr.some((a) => a % 2 == 0)
// every if every element pass the test returns true
// find() first element passing functino test is returned or nondefined
// filter(value,index,array) accepts 3 pararmeters new array with filtered elements for provided callback function
// reduce(accumulator,current value,current index(opt),sourcearray(opt)) executes a func on each element until a single output value is achieved
const array1 = [1, 2, 3, 4]
const reducer =
    (accumulator, current_value) => accumulator + current_value;
console.log(array1.reduce(reducer)) //10
console.log(array1.reduce(reducer, 5)) //15
// avg value with reducer
let total = 0
let number,index,array
const avarage =
    array1.reduce(total, number, index, array => {
        total += number
        if (index == array.length - 1) {
            return total / array.length

        } else {
            return total
        }
    }
    )
console.log(avarage)
// arrays in js are jagged they can have unequal numbber of elements
let arr3 = [
    [1, 2, 3],
    [4, 5, 7],
    [8,9,6]
]
for (let row of arr3) {
    for (let col of arr3) {
        console.log(arr3[row][col])
    }
}