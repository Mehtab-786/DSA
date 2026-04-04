// write a program takes a amount and after applying respective discount  return the final amount
//  Amount           Dicount
// 0-5000               0%
// 5001-7000            5%
// 7001-9000            10%
// >9000                20%

function calculateFinalAmount(amount) {
    let discount = 0;
    if (amount >= 5001 && amount <= 7000) discount = 5
    else if (amount >= 7001 && amount <= 9000) discount = 10
    else if (amount > 9000) discount = 20

    return amount - (amount * discount / 100)
}
