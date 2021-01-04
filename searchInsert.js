/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//     go through the array and find the target
//     return the index
//     if no in array, return expected index as if they were in order
var searchInsert = function(nums, target) {
    nums.push(target);
    var sortedNums= nums.sort((a,b)=>a-b);
    for(var i =0; i<sortedNums.length;i++){
     if(sortedNums[i]===target){
         return i;
     }
      
    }     

};