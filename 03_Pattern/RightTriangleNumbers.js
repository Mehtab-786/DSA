function printRightTriangleNumbers(n) {
    for (let outer = 0; outer < n; outer++) {
        for (let inner = 0; inner < outer + 1; inner++) {
            process.stdout.write(`${inner + 1} `)
        }
        console.log()
    }
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5