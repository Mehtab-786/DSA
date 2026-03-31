// Problem Description: Given an integer N, write a program to print your name N times.
function printNameNTimes(name, times) {
    if (times <= 0) return;
    console.log(name, times)
    printNameNTimes(name, times - 1)
}
// Time Complexity: O(N) && Space Complexity: O(N)
