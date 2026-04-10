function InvertedStarTriangle(n) {
    for (let outer = 1; outer <= n; outer++) {
        for (let star = n; star >= outer; star--) {
            process.stdout.write("*")
        }
        console.log()
    }
}

// ***** 
// ****  
// ***   
// **    
// *     
