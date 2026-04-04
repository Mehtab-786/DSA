// write a program which take  user's name and age as inputs and checks whether user is a valid voter . User is considered to be valid voter if voter age is more than or equals to 18.


function checkVoterEligibility(name, age) {
    if (age >= 18) {
        return `${name} is a valid voter.`
    }
    return `${name} is not a valid voter.`
}
