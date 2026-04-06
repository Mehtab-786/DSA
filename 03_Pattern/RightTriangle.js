function printRightTriangle(n) {
    for (let outer = 0; outer < n; outer++) {
        for (let inner = 0; inner < outer + 1; inner++) {
            process.stdout.write(`${'*'} `)
        }
        console.log()
    }
}

// *
// * *
// * * *
// * * * *
// * * * * *