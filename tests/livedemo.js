// 3 type of errors syntax runtime or logical
// unit testing tries to catch logical ones
// exeptions can be thrown with keyword throw
// types of errors - (General, Range, Type, Reference) Error('Hi'
function foo(){
    try{
        throw Error('myerror')
    } catch(error){
        console.log(error)
    } finally {

    }
}
// types of testing libraries and frameworks unit tesing,assertion or mocking frameworks
// we use modules for testing to isolate parts of the code
function sum(a,b){
    return a+b
}

module.exports = sum
// cheks what is exported 
const myfunc = require('./sum')
// module is a global property of the object that allows exporting it
    