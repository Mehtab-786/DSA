// Count Maximum Consecutive One's in the array

// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

function maxConsOnes(arr) {
    let count = 0, maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            maxCount = Math.max(count, maxCount)
        } else count = 0;
    }
    return maxCount
}

// Time Complexity: O(n)
// Space Complexity: O(1)

