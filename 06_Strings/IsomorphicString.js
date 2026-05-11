var isIsomorphic = function(s, t) {
    let map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i]) && map.get(s[i]) != t[i]){
            return false
        }else {
            map.set(s[i],t[i])
        }
    }
};

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("f11", "b23"))
console.log(isIsomorphic("paper", "title"))

