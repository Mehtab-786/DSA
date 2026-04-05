// Problem Statement: Given an integer N return the reverse of the given number.

function reverseNumber(num) {
    let reverseNum = 0;
    while (num >= 1) {
        let remainder = num % 10;
        reverseNum = (reverseNum * 10) + remainder;
        num = Math.floor(num / 10)
    }
    return reverseNum;
}

