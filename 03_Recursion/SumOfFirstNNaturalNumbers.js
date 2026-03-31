// Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .

// parameterised way
function SumOfNNumbers(N, Sum = 0) {
    if (N == 0) return Sum;
    return SumOfNNumbers(N - 1, Sum + N)
}


// function way
function SumOfNNumbersSecond(N) {
    if (N == 1) return 1;
    return N + SumOfNNumbersSecond(N - 1)
}

