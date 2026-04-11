// Take an array as argument and rotate the elements left by one place

function leftRotateByOne(arr) {
    let first =  arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }    
    arr[arr.length - 1]  = first
    return arr
}
