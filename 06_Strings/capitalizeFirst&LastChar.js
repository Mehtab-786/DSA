// Take sentence as parameter and capitalize the first and last letter of each word 
// Hello bhaI kaisE HO APP  --> HellO BhaI KaisE HO APP

function capitalizeFirst_Lastletter(str) {
    return str.split(" ").map(char => char[0].toUpperCase() + char.substring(1, char.length - 1) + char[char.length - 1].toUpperCase()).join(" ")
}

// console.log(capitalizeFirst_Lastletter("Hello bhaI kaisE HO APP"))