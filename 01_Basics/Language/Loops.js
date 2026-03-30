// priting from 0 to given number

function looping(num) {
    if (!num || typeof num != 'number') return 'Invalid Number'
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}


function loopingWhile(num) {
    if (!num || typeof num != 'number') return 'Invalid Number'
    let i = 1
    while (i <= num) {
        console.log(i)
        i++
    }
}

