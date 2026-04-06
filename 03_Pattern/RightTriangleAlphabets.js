function printRightTriangleAlphabets(n) {
    for (let outer = 0; outer < n; outer++) {
        let char = 65
        for (let inner = 0; inner < outer + 1; inner++) {
            let letter = String.fromCharCode(char)
            process.stdout.write(`${letter} `)
            char++;
        }
        console.log()
    }
}

// A
// A B
// A B C
// A B C D
// A B C D E
