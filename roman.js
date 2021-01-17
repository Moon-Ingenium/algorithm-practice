var romanToInt = function(s) {

    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i=0; i < s.length; i++){
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next) {
            result += next - cur // IV -> 5 - 1 = 4
            i++
        } else {
            result += cur
        }
    }

    return result; 
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    var strCopy = s.slice();
    var key;
    var total = 0;
    
    while (strCopy.length > 0) {
        key = strCopy[0] + strCopy[1];
        if (map[key]) { // if map.IV
            total = total + map[key];
            strCopy = strCopy.slice(2);
        } else {
            total = total + map[strCopy[0]];
            strCopy = strCopy.slice(1);
        }
    }
    return total;
    
};

    // set object pointing str key to numeric value
    // copy input str
    // go through string left to right (while strCopy.length > 0)
    // check current and next el (first and second el, str[0], str[1])
    // if edge case subtract first number from second and slice both from string
    // I could also first check if fisrt and second str is in the map, then just check first
    // else slice just one character
    // add to total and return total

// III, IV, CM, 
// convert roman numerals to integer
// IV, XL, CD 4s edge cases
// IX, XC, CM 9s edge case