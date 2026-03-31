// Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.


function isArmStrongNumber(num) {
    let copy = num;

    let numberOfDigit = Number(String(num).length)
    let resultedNumber = 0;
    while (copy >= 1) {
        let remainder = copy % 10;
        resultedNumber += Math.pow(remainder, numberOfDigit);
        copy = Math.floor(copy / 10)
    }

    return num === resultedNumber
}
