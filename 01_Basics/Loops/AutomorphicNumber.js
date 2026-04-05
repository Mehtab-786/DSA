// Return 'yes' or 'no' based the given number is Automorphic or not . Automorphic number if it's sqare ends with the number itselef.

function isAutomorphic(n) {
    let sq = Math.pow(n, 2)
    if (String(sq).endsWith(String(n))) {
        return "Yes"
    } else return "No"
}

