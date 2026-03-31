//  Given an integer N, write a program to print numbers from 1 to N.
function print1ToN(N) {
    if (N === 0) return;
    print1ToN(N - 1)
    console.log(N)
}

//  Given an integer N, write a program to print numbers from N to 1.
function printNTo1(N) {
    if (N === 0) return;
    console.log(N)
    print1ToN(N - 1)
}

