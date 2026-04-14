// Remove Duplicates in-place from Sorted Array

// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

function remDupSortAr(arr) {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[j] != arr[i]) {
            arr[j + 1] = arr[i]
            j++;
        }
    }
    return j+1
}

// Time → O(n) ✅
// Space → O(1) ✅
