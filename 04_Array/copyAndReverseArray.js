// You are given an array of size n . Your task is to create a new array that contains the same elements but in reverse order.

function copyAndReverseArray(arr) {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
}

