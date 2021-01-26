// var isValid = function (s) {

//     const obj = {
//       "(": ")",
//       "{": "}",
//       "[": "]"
//     }
    
  
//     const stack = [];
//     // for (const paran of s) {
//     //   if (obj.hasOwnProperty(paran)) {
//     //     stack.push(paran)
//     //   } else {
//     //     const closeParan = stack.pop();
//     //     if (paran !== obj[closeParan]) {
//     //       return false;
//     //     }
//     //   }
//     // }
//     let char;
//     let closest;
//     for (var i = 0; i < s.length; i++) {
//         char = s[i];
//         if (obj[char]) {
//             // key exists, so does value
//             stack.push(char);
//         } else {
//             closest = stack.pop();
//             if (char !== obj[closest]) {
//                 return false;
//             }
//         }
//     }
  
//     return stack.length === 0;
//   };

// //   console.log(isValid('([)]'))
//   console.log(isValid('{[[[]]]}'))
var checkIfExist = function(arr) {
  //     run through thr array 
  //     check for m
  //     check for n m*2
  //     return boolean
    
      for(i=0;i<arr.length;i++){
     if(arr[i] === (arr[i+1]/2)|| (arr[i]/2) === arr[i+1])
     {
     return true;
    }
  }
  return false;
  };

  console.log(checkIfExist([10,2,5,3]));
  var checkIfExist = function(arr) {
    //     run through thr array 
    //     check for m
    //     check for n m*2
    //     return boolean
          var obj = {};
      var item;
        var result = false
      for (var i = 0; i < arr.length; i++) {
        item = arr[i];
        obj[item] = i
      }
    
      // once the object is set up
      arr.forEach((item, i) => {
        if (obj[item * 2]) {
          // the key is in the object, so there is a double obj[5 * 2] || obj[10] exists
          result =  true;
        }
      })
        
        return result;
    }