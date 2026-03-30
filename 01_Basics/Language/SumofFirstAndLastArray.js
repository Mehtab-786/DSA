
/**
 * Given an integer array nums, return the sum of
 * the 1st and last element of the array.
 */

function sumOfFirstAndLast(numsArr) {
    const first = numsArr[0];
    const last = numsArr[numsArr.length - 1];

    return first + last;
}
