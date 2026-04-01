// Problem Statement: Given a string, check if the string is palindrome or not. A string is said to be palindrome if the reverse of the string is the same as the string.


function isPallindrome(str, l, r) {
    if (l >= r) return true;
    if (str[l] !== str[r]) return false;
    return isPallindrome(str, l + 1, r - 1)
}

