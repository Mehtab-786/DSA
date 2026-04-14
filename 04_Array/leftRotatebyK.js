// Rotate array by K elements
// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

function rotateByK(arr, k, direction) {
    k =  k % arr.length 

    if (direction === 'right') {
        swap(arr, 0, arr.length - 1);
        swap(arr, 0, k - 1);
        swap(arr, k, arr.length - 1);
    } else {
        swap(arr, 0, k - 1);
        swap(arr, k, arr.length - 1);
        swap(arr, 0, arr.length - 1);
    }

    return arr;
}

function swap(arr, start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++;
        end--;
    }
}

// time complexity = 0(n)
// space = O(1)