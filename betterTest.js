// // Your solution(s) should consider all possible corner cases and handle large input efficiently. 
// // Passing the example test does not indicate that your solution is correct. 
// // The example test is not part of your final score.

// // function that given an interger N, returns the maximum possible value obtained by inserting one 5digit inside the decimal representation of N

// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // return number
//     // math.abs()- can be used to remove -
//     // math.sign()- outputs -1, 1
//     // may need both on neagtive numbers
//     // edge case 0 === return 50 always
//     // identify where to insert 5
//     // N = 268 check if 5 is greater or less than the number 
//     // unless its neg- that will make it smaller
//     // turn int into a string
//     // go through the string and check the value 
//     // if N[i] < 5, insert 5, if N[i]> 5, move forward 
//     // if negative number - if N[i]>5 insert there
//     // give a string check to see if it is balanced
//     // a tring is balanced if it has a lower case and a matching upper case
//     // return the longest balanced substring
//     // if there is not balance return -1 

// let str = N.toString();
// // "80"
// for(let i =0; i<str.length;i++){

// }



//     let maxValue = 0;
//     let currentIndex = 0; 
//     const str = N.toString();
  
//     if(N < 0){
//         let int = Math.abs(N);
        
      
//         if(+(str[0]) >5 ){
//             // insert 5 at beginning and * Math.sign(N)
//             let str= N.toString();
//            let newStr=  str.slice(0,-1);
//            console.log(newStr)

//         }
//     }
//     return maxValue;
// }
// console.log(solution(-8900));

// // balance a string 
// // make a hash map 
// // check the key value pair of matches
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     // go through thr string 
//     // make a map 
//     // create a key value pair 
//     // output greatest value || -1 if not balanced

//     let map = {};
//     let max = 0;
//     let string ='';
//     console.log(S);
//     "TacoCat"
//     for(let i = 0; i< S.length; i++){
//         console.log(S[i])
//         for(let j = 1; j <S.length; j++){
//             if (S[i].match(S[j])){
//                 string = string + S[i]
//                 console.log(string);
//                 max = string.length;
//         }
//         else{
//             max = -1;
//         }
   
//     }
//     // for(let char in map){
//     //     if (map[char]){
            
//     //         // console.log(max)
//     //         string = string + char;
//     //         console.log(string)
//     //         max = string.length;
//     //         console.log(max)
           
//     //     }
        
//     }

 
    
// return max;
// }
// console.log(solution("TacoCat"));

// days of the week Mon - Sun
// s = day
// K equal days later
// function solution(S, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
//     //  start index of days
//     let index = days.indexOf(S);
//     let secondIndex = index + K % days.length;
//     return days [secondIndex];

// }
// console.log(solution("Wed", 2))
// A[0] = -3
// A[1] = 1
// A[2] = 2
// A[3] = -2
// A[4] = 5
// A[5] = 6
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // make array into string to sort
    // sort array so numbers are in order
    // make the three numbers
    // very last 3 numbers - multiple  3
    // return total number
    
    
    let sorted = A.sort((a,b)=> b-a);
    // [5,4,2]

    // maxTotal = sorted[0] * sorted[1] * sorted[2];

return Math.max(sorted[0] * sorted[1] * sorted[sorted.length-1], sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3] );
}
console.log(solution([-100,-98,-1,2,3,4]));
// public class Solution {
//     public int maximumProduct(int[] nums) {
//         Arrays.sort(nums);
//         return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
//     }
// }