var isValid = function (s) {

    const obj = {
      "(": ")",
      "{": "}",
      "[": "]"
    }
    
  
    const stack = [];
    // for (const paran of s) {
    //   if (obj.hasOwnProperty(paran)) {
    //     stack.push(paran)
    //   } else {
    //     const closeParan = stack.pop();
    //     if (paran !== obj[closeParan]) {
    //       return false;
    //     }
    //   }
    // }
    let char;
    let closest;
    for (var i = 0; i < s.length; i++) {
        char = s[i];
        if (obj[char]) {
            // key exists, so does value
            stack.push(char);
        } else {
            closest = stack.pop();
            if (char !== obj[closest]) {
                return false;
            }
        }
    }
  
    return stack.length === 0;
  };

//   console.log(isValid('([)]'))
  console.log(isValid('{[[[]]]}'))