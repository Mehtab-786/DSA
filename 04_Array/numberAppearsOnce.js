// Find the number that appears once, and the other numbers twice

// Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

function appearsOnce(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] - 1
        } else {
            obj[arr[i]] = 1
        }
    }

    for (const key in obj) {
        if (obj[key] == 1) {
            return key
        }
    }
}
// Time complexity = O(n) 
// Space complexity = O(n)
