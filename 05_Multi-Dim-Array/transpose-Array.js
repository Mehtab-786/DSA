function tranposeArrInPlace(matrix) {  // equal row & column
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    return matrix
}

function tranposeArr(arr) {
    let newArr = Array.from({ length: arr[0].length }, () => Array(arr.length))
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            newArr[i][j] = arr[j][i]
        }
    }
    return newArr
}

// Time Complexity - O(n×m)
// Space Complexity - O(n×m)