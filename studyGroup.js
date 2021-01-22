// // Given an array nums of integers, return how many of them contain an even number of digits.
 

// // Example 1:

// // Input: nums = [12,345,2,6,7896]
// // Output: 2
// // Explanation: 
// // 12 contains 2 digits (even number of digits). 
// // 345 contains 3 digits (odd number of digits). 
// // 2 contains 1 digit (odd number of digits). 
// // 6 contains 1 digit (odd number of digits). 
// // 7896 contains 4 digits (even number of digits). 
// // Therefore only 12 and 7896 contain an even number of digits.

// var findNumbers = function (nums) {
//     let count = 0;
//     for (let num of nums) {
//       let digit = 0;
//         // var numStr = num + "";
//         // if (numStr.length % 2 === 0) {
//         //     count ++;
//         // }
  
//       while (num > 0) {
//         digit++;
//         num = parseInt(num / 10);
//       }
  
//       if (digit % 2 === 0) count++;
//     }
  
//     return count;
//   };
// //   https://leetcode.com/problems/fizz-buzz/

// // Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// // Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// // ex. Input: nums = [1,1,2]
// // Output: 2, nums = [1,2]
// var removeDuplicates = function(nums) {
//     var currentNum = 0;
//     var currentIndex = 1;
    
//     if (!nums || !nums.length) return [];
    
//     while (currentNum !== nums.length -1) {
//         if (nums[currentNum] === nums[currentIndex]) {
//             nums.splice(currentIndex, 1);
            
//         } else {
//             currentNum++;
//             currentIndex++;
//         }
//     }
    
    
//     return nums.length;
// };

// remove duplicates in place from sorted array
// empty array, or non existent array?
// [1,1,2,3] -> 3, but the input is modified to [1,2,3]
// [] -> 0
// currentNum = nums[0];
// currentIndex = 1;
// loop through array nums, while currentNum !== num[nums.length - 1]
// compare num[currentIndex] with currentNum, 
// if same, array.splice(currentIndex, 1)
// if not the same, reassign currentNum to currentIndex, currentIndex = currentIndex +1
// var nums = [2,7,11,15];
// var target = 9;
// var twoSum = function(nums, target) {
//   var result =[];
//   var store ={};
//   var key;
// for (var i =0; i<nums.length;i++){
//   store[nums[i]]=i;
// }
// for(var i =0; i<nums.length;i++){
//   key = target - nums[i];
//   if (store[key] > -1 && store[key]!==i){
//     result.push(i);
//     result.push(store[key])
//     break;
//   }
// }
// return result;
// }
// console.log(twoSum(nums,target))
var s ="oneTwoThree";


// return number of words
// go through word, 
// counter ++ each time find a cap letter
// return number of words
function camelcase(s) {
    if(!s || s=== " "){
        return 0;
    }
let count = 1;
for (let i=0;i<s.length;i++){
    if(s[i].match(/[A-Z]/g)){
        count++
    }
    
}
return count;

}
console.log(camelcase("loverHorseGuy"))

