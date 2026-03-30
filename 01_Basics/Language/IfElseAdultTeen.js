
/**
 * Given an integer age, print on the screen:
 * - Adult if age >= 18
 * - Teen if age < 18
 */

function IfElseAdultTeen(age) {
    if(age <= 0 || Number.isNaN(age)) return 'Invalid Input!!'
    if (age >= 18) {
        return "Adult";
    } else {
        return "Teen";
    }
}
