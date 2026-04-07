function MirroredRightTriangle(n) {
    for (let outer = 1; outer <= n; outer++) {
        for (let spaces = 0; spaces < n - outer; spaces++) {
            process.stdout.write("  ")
        }
        for (let star = 1; star <= outer; star++) {
            process.stdout.write("* ")
        }
        console.log()
    }
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *