// Array and length of array as arguments and return the second smallest and second largest elements

function SecondSmallestandSecondLargestElementFirstWay(arr, n) {
    let seclargest = -1
    let secSmallest = -1
    arr = arr.sort((a, b) => a - b);
    seclargest = arr[n - 2]
    secSmallest = arr[1]
    return [secSmallest, seclargest]
}

function SecondSmallestandSecondLargestElementSecondWay(arr, n) {
    let largest = Math.max(...arr);
    let Smallest = Math.min(...arr);

    let seclargest = -1;
    let secSmallest = largest;

    for (let i = 0; i < n; i++) {
        if (arr[i] < largest && arr[i] > seclargest) seclargest = arr[i];
        if (arr[i] > Smallest && arr[i] < secSmallest) secSmallest = arr[i]
    }
    return [secSmallest,seclargest]
}

// Time Complexity = O(n)
// Space Complexity = O(1) (constant space)
