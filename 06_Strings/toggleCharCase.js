// Input a char or string and reverse the case 
// e.g. meHTaB -> MHhtAb    , MaN -> mAn

function toggleCase(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)

        if (str[i].toUpperCase() == str[i]) {
            newStr += String.fromCharCode(charCode + 32)
        } else {
            newStr += String.fromCharCode(charCode - 32)
        }
    }
    return newStr;
}

// console.log(toggleCase("meHTaB"))
// console.log(toggleCase("MaN")) 