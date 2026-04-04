// Write a program that takes unit as input that is number of electricity units consumesd and then calculates the final electricity  bill.

//   Unit            Price
// <=100             Rs.4.2/unit
// 101-200           Rs.6/unit
// 201-400           Rs.8/unit
// >400              Rs.13/unit

function calculateElectricityBill(unit) {
    let amount = 0

    if (unit > 400) {
        amount += 13 * (unit - 400)
        unit = 400
    }

    if (unit >= 201 & unit <= 400) {
        amount += 8 * (unit - 200)
        unit = 200
    }

    if (unit >= 101 & unit <= 200) {
        amount += 6 * (unit - 100)
        unit = 100
    }

    if (unit <= 100) {
        amount += 4.2 * unit
    }
    
    return amount.toFixed(0)
}
