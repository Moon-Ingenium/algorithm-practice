// Given an array nums of integers, return how many of them contain an even number of digits.
 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

var findNumbers = function (nums) {
    let count = 0;
    for (let num of nums) {
      let digit = 0;
        // var numStr = num + "";
        // if (numStr.length % 2 === 0) {
        //     count ++;
        // }
  
      while (num > 0) {
        digit++;
        num = parseInt(num / 10);
      }
  
      if (digit % 2 === 0) count++;
    }
  
    return count;
  };