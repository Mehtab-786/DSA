// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function LongestCommonPrefix(str) {
    if(str.length == 0) return "";

    let smallestChar = str.reduce((prev, next) => {
        if (prev.length > next.length) {
            return next
        } else return prev
    }, str[0])
    
    for (let i = 0; i < smallestChar.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if(smallestChar[i] != str[j][i]){
                return smallestChar.slice(0,i)
            }
        }   
        if(i == smallestChar.length - 1) return smallestChar
    }
    return ""
}

// console.log(LongestCommonPrefix(["flower", "flow", "flight"])) // "fl"
// console.log(LongestCommonPrefix(["dog", "racecar", "car"]))    // Output: ""
// console.log(LongestCommonPrefix(["car", "car", "car"]))    // Output: ""


// ⏱ Time Complexity
// n = number of strings
// m = length of smallest string
// O(n × m)

// 🧠 Space Complexity
// No extra data structures (just variables)
// O(1)
