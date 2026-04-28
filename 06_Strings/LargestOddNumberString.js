// Problem Statement: Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.
// The number returned should not have leading zero's. But the given input string may have leading zero.


function LargestOddNumberInString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (Number(str[i]) % 2 != 0) {
            let char = str.substring(0, i + 1)
            if (char.charAt(0) == '0') {
                let a = 0
                while (char[a] == '0') {
                    a++
                }
                return str.substring(a, i + 1)
            }else return char
        }
    }
    return "";  
}

// ⚖️ Complexity
// Time: O(n)
// Space: O(1)
