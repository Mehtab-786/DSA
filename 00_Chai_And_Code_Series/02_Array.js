// Array -> helps to store multiple values under variable
    // contigeous memory allocation, 
    // different data types can be stored, 
    // dynamic size 

let arr = []
let arr1 = new Array()

let val = [1,2,3,4,5]
// for (let i = 0; i < val.length; i++) {
//     console.log(val[i])    
// }


// let reverse = val.reverse()
// console.log(reverse)


val.indexOf(3)  // index


val[2] = 55 // assigning values

delete val[0] // deleting


let names = ['Mehtab', 'Riya', 'Subran']

// console.log(names[2])

function printAll(arr) {
    arr.forEach(val => process.stdout.write(`${val} `))
}
// printAll(names)

// names.length





