// Find Greatest common divisor of two numbers

function GCD(a, b) {
    if (a == 0) {
        console.log(a, b)
        return b
    };
    if (a > b) GCD(a - b, a)
    else GCD(b - a, a)
}
