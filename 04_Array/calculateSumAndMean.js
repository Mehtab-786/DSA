// take array and size of array as parameter and return sum and mean

function calculateSumAndMean(arr, n) {
    let Sum = arr.reduce((prev, next) => prev + next, 0)
    let Mean = (Sum / n).toFixed(1)
    return [Sum, Mean]
}

