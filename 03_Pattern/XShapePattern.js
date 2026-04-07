function printXShapePattern(n) {
    for (let outer = 1; outer <= n; outer++) {
        for (let inner = 1; inner <= n; inner++) {
            if (outer == inner || inner + outer == n + 1) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        console.log()
    }
}
console.log(printXShapePattern(5))

// *   *
//  * *
//   *
//  * *
// *   *