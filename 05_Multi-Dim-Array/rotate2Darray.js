function rotateArrInPlace(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        swap(matrix[i], 0, matrix[i].length - 1)
    }
    return matrix
}

function swap(arr, start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++; end--
    }
}

console.log(rotateArrInPlace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]))


// [ 7, 4 , 1]
// [ 8, 5 , 2]
// [ 9, 6 , 3]
