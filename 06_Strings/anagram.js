/*
 * Valid Anagram
 * ================
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    const myMap = new Map();
    for (let i = 0; i < s.length; i++) {
        myMap.set(s[i], (myMap.get(s[i]) || 0) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        if (!myMap.has(t[i])) {
            return false
        } 
        
        myMap.set(t[i], myMap.get(t[i]) - 1 )

        if(myMap.get(t[i]) == 0) {
            myMap.delete(t[i])
        }
    }
    return true
};


// console.log(isAnagram("anagram", "nagaram"))
// Input: s = "anagram", t = "nagaram"
// Output: true
// console.log(isAnagram("rat", "car"))
// Input: s = "rat", t = "car"
// Output: false
// console.log(isAnagram("aa",  "bb" ))
