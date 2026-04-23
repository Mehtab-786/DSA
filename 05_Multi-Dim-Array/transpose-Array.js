function tranposeArrInPlace(arr) {  // equal row & column
    let newArr = Array.from({ length: arr.length }, () => Array(arr.length))
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr[j][i] = arr[i][j]
        }
    }
    console.log(newArr)
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