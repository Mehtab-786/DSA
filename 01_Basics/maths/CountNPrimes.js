/**
 * You are given an integer n. You need to find out the number of
 * prime numbers in the range [1, n] (inclusive). Return the number of
 * prime numbers in the range.
 * <p>
 * A prime number is a number which has no divisors except, 1 and itself.
 */

function countNPrimes(num) {
    let counter = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) counter++;
    }
    return counter
}


function isPrime(num) {
    if (typeof num != 'number' || Number.isNaN(num)) return 'Invalid Input';

    if (num == 2) return true
    if (num == 1 || num % 2 == 0) return false;

    for (let i = 3; i < Math.floor(num / 2); i + 2) {
        if (num % i == 0) return false
    }

    return true
}
