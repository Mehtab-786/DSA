// check if the array is in ascending, descending or equal in order.

function isArraySorted(arr) {
    let desc = true, asc = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) asc = false
        else if (arr[i] < arr[i + 1]) desc = false
    }
    if (desc && asc) return 'Equal...'
    else if (desc) return 'Descending...'
    else if (asc) return 'Ascending...'
    else return 'Unsorted...'
}

// time complexity = O(n)
// space  complexity =O(1)
