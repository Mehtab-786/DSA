/**
 * Given the integer day denoting the day number, print on the screen which
 * day of the week it is. Week starts from Monday and for values greater
 * than 7 or less than 1, print Invalid.
 * <p>
 * Ensure only the 1st letter of the answer is capitalised.
 */
switch (day) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
}
