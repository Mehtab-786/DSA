// Check if a number is prime or not

// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2..

function isPrime(num) {
    if (typeof num != 'number' || Number.isNaN(num)) return 'Invalid Input';

    if (num == 2) return true
    if (num == 1 || num % 2 == 0) return false;

    for (let i = 3; i < Math.floor(num / 2); i + 2) {
        if (num % i == 0) return false
    }
    
    return true
}
export default isPrime