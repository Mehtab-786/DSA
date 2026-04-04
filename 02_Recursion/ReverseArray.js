// Problem Statement: You are given an array. The task is to reverse the array and print it.

function reverseArray(arr, l, r) {
    if (l >= r) return;
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    reverseArray(arr, l + 1, r - 1)
}

