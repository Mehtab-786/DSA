let multiDarray = [[1, 2, 3,7,9], [4, 5, 6,1,2], [7, 8, 9,6,7,7]];

for (let i = 0; i < multiDarray.length; i++) {
    for (let j = 0; j < multiDarray[i].length; j++) {
        process.stdout.write(`${multiDarray[i][j]} `)
    }
    console.log()
}
