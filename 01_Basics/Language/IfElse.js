/**
 * Given marks of a student, print on the screen:
 * - Grade A if marks >= 90
 * - Grade B if marks >= 70
 * - Grade C if marks >= 50
 * - Grade D if marks >= 35
 * - Fail, otherwise.
 */

function studentGrade(marks) {
    if (typeof marks != 'number') return 'Invalid Input!! ';

    if (marks >= 90) return "Grade A";
    else if (marks >= 70) return "Grade B";
    else if (marks >= 50) return "Grade C";
    else if (marks >= 35) return "Grade D";
    else return "Fail";
}

