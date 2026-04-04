// Problem Statement: Given a number X,  print its factorial.

// Note: X  is always a positive number. 

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
// Time Complexity: O(N), Since the function is being called n times, and for each function, we have only one printable line that takes O(1) time, so the cumulative time complexity would be O(N)

// Space Complexity: O(N), In the worst case, the recursion stack space would be full with all the function calls waiting to get completed and that would make it an O(N) recursion stack space.
