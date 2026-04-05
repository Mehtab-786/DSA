// Return true or false based on the given number is strong number or not . Strong number is if sum of factorial of it's digit is equal to itself

function isStrongNumber(num) {
    let copy = num
    let sumOfFactorial = 0;
    while (num >= 1) {
        let remainder = num % 10;
        sumOfFactorial += factorial(remainder);
        num = Math.floor(num / 10)
    }
    return sumOfFactorial ===  copy ? 'Yes' : 'No'    
}

function factorial(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}