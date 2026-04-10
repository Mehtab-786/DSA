function InvertedStarTriangle(n) {
    for (let outer = 1; outer <= n; outer++) {
        for (let star = n; star >= outer; star--) {
            process.stdout.write(`${n - star + 1} `)
        }
        console.log()
    }
}

// 12345
// 1234
// 123
// 12
// 1
