// Union of Two Sorted Arrays

// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.

function unionArr(arr1, arr2) {
    let unionArr = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        let val;

        if (arr1[i] === arr2[j]) {
            val = arr1[i];
            i++; j++;
        } else if (arr1[i] < arr2[j]) {
            val = arr1[i++];
        } else {
            val = arr2[j++];
        }

        // push only if different from last element
        if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== val) {
            unionArr.push(val);
        }
    }

    // remaining elements of arr1
    while (i < arr1.length) {
        let val = arr1[i++];
        if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== val) {
            unionArr.push(val);
        }
    }

    // remaining elements of arr2
    while (j < arr2.length) {
        let val = arr2[j++];
        if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== val) {
            unionArr.push(val);
        }
    }

    return unionArr;
}