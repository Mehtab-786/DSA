// Accept year as input and return if the year is leap or not

function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) return 'Leap Year'
            else return 'Not a Leap Year'
        } else return 'Leap Year'
    } else return 'Not a Leap Year'

}

