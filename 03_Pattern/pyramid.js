function pyramid(n) {
    for (let i = 0; i < n; i++) {
        for (let a = 0; a < n -1 - i; a++) {
            process.stdout.write(" ")
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            process.stdout.write("*")
        }
        console.log()
    }
}
console.log(pyramid(5))

//     *
//    ***
//   *****
//  *******
// *********