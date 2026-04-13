// Function to find the largest element in the array

function findLargestElement( arr, n) {
    let max = arr[0];

    for (let i = 1; i < n; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;  
}

// Time Complexity: O(N), where N is the size of the array, as we are iterating through the array once.
// Space Complexity: O(1), as we are using a constant
