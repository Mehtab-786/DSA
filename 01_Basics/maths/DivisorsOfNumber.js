// Print all Divisors of a given Number


// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

function divisorsOfNumber(num) {
    let divisorArr = []
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            divisorArr.push(i)
            if (i != num / i) divisorArr.push(num / i)
        }
    }
    divisorArr.push(1, num)
    return divisorArr
}
