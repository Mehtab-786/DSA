// Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

function fibunacciSeriesFirstWayLoop(num) {
    let fibunacciArray = [0, 1]
    for (let i = 2; i < num; i++) {
        let c = fibunacciArray[i - 2] + fibunacciArray[i - 1]
        fibunacciArray.push(c)
    }
    console.log(fibunacciArray)
}

function fibunacciSeriesSecondWayIteration(num) {
    let first = 0
    let second = 1
    process.stdout.write(`${first} `)
    process.stdout.write(`${second} `)
    for (let i = 2; i <= num; i++) {
        let third = first + second
        first = second
        second = third
        process.stdout.write(`${third} `)
    }
    return;
}

function fibunacciSeries(num) {
    if (num == 0 || num == 1) return num
    let first = fibunacciSeries(num - 2)
    let second = fibunacciSeries(num - 1)
    return (first + second)
}
// Time Complexity: O(2^N) { This problem involves two function calls for each iteration which further expands to 4 function calls and so on which makes worst-case time complexity to be exponential in nature }.

//Space Complexity: O(N) { At maximum there could be N function calls waiting in the recursion stack since we need to calculate the Nth Fibonacci number for which we also need to calculate (N-1) Fibonacci numbers before it }.

