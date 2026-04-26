// Take a string as parameter and return true or false based on if the string is pallindrome or not .

function isPallindrome(str) {
    let start = 0, end = str.length -1 
    while (start <= end) {
        if(str[start] != str[end]) return false;
        start++, end--
    }
    return true
}

