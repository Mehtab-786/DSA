// return the frequency of each char in string 

function frequency(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }
    return freq
}

// console.log(frequency("hello"))
// console.log(frequency("mehtab"))
// console.log(frequency("mmmooo"))