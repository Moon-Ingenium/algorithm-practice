/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var nums = [0,1,2,2,3,0,4,2] ;
var val = 2;
var length = 0;
// Output: 5, nums = [0,1,4,0,3]
// var removeElement = function(nums, val) { //(0,1,2,2,3,0,4,2) (2)
//     for(i=0;i<nums.length;i++){
//         var x = nums[i];//0
      
//         while(x!==val){
//             length +1;
//             nums[length]= nums[i]
//         }
// return length;
//     }
// };

  var removeElement = function(nums, val) {
    var len = nums.length;
    var count = 0;
    for (var i = 0; i < len; i++) {
      if (nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
  };