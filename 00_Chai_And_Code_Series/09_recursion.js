// function calling itself is called recursion

// function abc(){
//     abc()    // calling itself
// }

function factorial(num) {
    if (num == 1 || num == 0) return 1;
    return num * factorial(num - 1)
}
// console.log(factorial(5))


function fibonacci(num) {
    if (num == 0 || num == 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2)
}
// console.log(fibonacci(5))