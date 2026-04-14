// Left Rotate the Array by One
// Problem Statement: Given an integer array nums, rotate the array to the left by one.

function leftRotateByOne(arr) {
    let first =  arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }    
    arr[arr.length - 1]  = first
    return arr
}

// time complexity = 0(n)
// space = O(1)
