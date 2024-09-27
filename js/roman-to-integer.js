/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;

    romanList = {
        'I': 1,
        'V': 5, 
        'X': 10, 
        'L': 50, 
        'C': 100, 
        'D': 500, 
        'M': 1000
    }

    for(let i = 0; i < s.length; i++) {
        if(romanList[s[i]] < romanList[s[i + 1]]) {
            sum += romanList[s[i + 1]] - romanList[s[i]];

            i++;
        } else {
            sum += romanList[s[i]];
        }
    
    }

    return sum;
};