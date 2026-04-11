// Write a function that takes an array of integers and reverses its elements in place without using any extra space or built-in reverse methods. The function should modify the original array by swapping elements from both ends moving toward the center, and then return the reversed array.


function reverseArrayInPlace(arr) {
    let start = 0, end = arr.length - 1;

    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++, end--        
    }
    return arr;
}
