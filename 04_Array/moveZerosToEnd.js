function moveZerosToEnd(arr) {
    let i=0, j = 0
    while (i < arr.length) {
        if (arr[i] != 0) {
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            j++;
        } 
        i++;
    }
    return arr
}
// Time Complexity = O(n)
// Space Complexity: O(1)
