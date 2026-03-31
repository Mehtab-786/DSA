// Given an integer N, return the number of digits in N as num.

function countDigit(num) {
    let digits = 0;
    while (num >= 1) {
        digits++;
        num = Math.floor(num / 10)
    }
    return digits;
}
