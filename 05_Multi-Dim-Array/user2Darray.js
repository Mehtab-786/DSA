// npm i prompt-sync

// const PromptSync = require("prompt-sync")()

function userCall() {
    let user2DArray = []

    let rows = Number(PromptSync('Enter the number of rows you want : '))
    let columns = Number(PromptSync('Enter the number of columns you want : '))

    if(Number.isNaN(rows) || Number.isNaN(columns)) return 'Invalid input';

    for (let i = 1; i <= rows; i++) {
        let row = []
        for (let j = 1; j <= columns; j++) {
            let num = Number(PromptSync(`Enter your number for column number ${j} in row number ${i} `))
            if(Number.isNaN(num)) {
                row.push(0)
            } else row.push(num)
        }
        user2DArray.push(row)
    }

    return user2DArray
}
// Array.from({ length: 3 }, () => new Array(3).fill(0))        <-- one liner 2D array 
