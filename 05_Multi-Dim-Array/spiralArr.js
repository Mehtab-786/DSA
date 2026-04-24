var spiralOrder = function (matrix) {
    let top = 0, bottom = matrix.length - 1
    let left = 0, right = matrix[0].length - 1

    let spiralledArray = []
    while (top <= bottom && left <= right) {
        // top row
        for (let i = left; i <= right; i++) {
            spiralledArray.push(matrix[top][i])
        }
        top++;
        // right colorm
        for (let i = top; i <= bottom; i++) {
            spiralledArray.push(matrix[i][right])
        }
        right--;
        // Bottom row
        if(top <= bottom){
            for (let i = right; i >= left; i--) {
                spiralledArray.push(matrix[bottom][i])
            }
            bottom--
        }
        if(left <= right){
            for (let i = bottom; i >= top; i--) {
                spiralledArray.push(matrix[i][left])
            }
            left++;
        }
    }
    return spiralledArray
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

