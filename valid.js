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
// //   console.log(isValid('{[[[]]]}'))
// var checkIfExist = function(arr) {
//   //     run through thr array 
//   //     check for m
//   //     check for n m*2
//   //     return boolean
    
//       for(i=0;i<arr.length;i++){
//      if(arr[i] === (arr[i+1]/2)|| (arr[i]/2) === arr[i+1])
//      {
//      return true;
//     }
//   }
//   return false;
//   };

  // console.log(checkIfExist([10,2,5,3]));
  // var checkIfExist = function(arr) {
  //   //     run through thr array 
    //     check for m
    //     check for n m*2
    //     return boolean
  //         var obj = {};
  //     var item;
  //       var result = false
  //     for (var i = 0; i < arr.length; i++) {
  //       item = arr[i];
  //       obj[item] = i
  //     }
    
  //     // once the object is set up
  //     arr.forEach((item, i) => {
  //       if (obj[item * 2]) {
  //         // the key is in the object, so there is a double obj[5 * 2] || obj[10] exists
  //         result =  true;
  //       }
  //     })
        
  //       return result;
  //   }
  // Input: arr = [7,1,14,11]
 
  // var checkIfExist = function(arr) {
  //   //     run through thr array 
  //   //     check for m
  //   //     check for n m*2
  //   //     return boolean
  //       let boolean= false;
  //       for (let i =0;i<arr.length;i++){
  //           let m = arr[i];
  //           for(let j =1; j< arr.length; j++){
  //               let n = arr[j];
  //               if(n=== (m*2) || n=== (m/2) && i!==j){
  //                   boolean = true;
                    
  //               }
  //           }
  //       }
        
  //       return boolean;
  //   }
  //   console.log(checkIfExist([10,2,5,3]));
  // --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
let braces = "[({)}](]"

function validBraces(braces){
  let result = false;
if (braces === ""){
return result;
}
//TODO 
// return a boolean

// go through the string and find the match pair
// if empty string return false
// define variables to swap
// let leftIndex = 0;
// let rightIndex = braces.length-1;


// while(leftIndex<rightIndex){ 
// let temp = braces[leftIndex];//braces[0]1
// braces[leftIndex] = braces[rightIndex];// leftIndex = braces[7]6
// braces[rightIndex] =temp;//rightIndex= [0]1
// leftIndex ++;
// rightIndex --;
// if(leftIndex === "[" && rightIndex === "]" || leftIndex === "(" && rightIndex === ")" || leftIndex === "{" && rightIndex === "}"){
// result = true;
// }
 
// }

// return result;
var obj = {
  '{': '}',
  '(': ')',
  '[': ']'
}
var stack = [];
for(i=0;i<braces.length;i++){
  if (braces[i] === "("|| "[" || "{"){
  stack.push(braces[i]);
}
else
{
  if(obj[stack[stack.length-1]] === stack[i]){
    result = true;
  }
}
}
return result;
}

// if([{(//push to stack)
// else obj[arr[arr.lngth-1]] === input[i] still matching
// else not matching

console.log(validBraces("()"));