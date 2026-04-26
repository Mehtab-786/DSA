//  Flipping an Image
// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.


var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        swap(image[i], 0, image[i].length - 1)
    }

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) image[i][j] = 1;
            else image[i][j] = 0;
        }
    }
    return image
};

function swap(arr, start, end) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++; end--
    }
}

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))



// Example 1:
// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:

// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]