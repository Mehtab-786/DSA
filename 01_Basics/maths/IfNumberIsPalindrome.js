// Check if a number is Palindrome or Not 
// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

function isPallindrome(num) {
    let copy = num
    let reverseNum = 0;
    while (copy >= 1) {
        let remainder = copy % 10;
        reverseNum = (reverseNum * 10) + remainder;
        copy = Math.floor(copy / 10)
    }
    return reverseNum === num
}

