/**
 * Recursively prints natural numbers from n to 1, separated by a space.
 * @param {number} n
 */
function printNumbers(n) {
   for (let i = n; i >= 1; i--) {
        process.stdout.write(`${i} `)
   }
}
