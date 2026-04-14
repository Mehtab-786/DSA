// Linear Search 

// Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

function LinearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) return i;
    }
    return -1;
}

//  * Time Complexity: O(n)
//  * Space Complexity: O(1)
