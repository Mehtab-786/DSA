function printVShapePattern(n) {
    for (let outer = 0; outer < n; outer++) {
        for (let star = 0; star < n * 2 - 1; star++) {
            if (outer == star || outer + star == n * 2 - 2) { 
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")

            }
        }
        console.log()
    }
}

// *       *
//  *     *
//   *   *
//    * *
//     * 