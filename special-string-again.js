function substrCount(n, s) {
let total = 0;
// only center letter is different
// go through the string and look for a palindrome
// add each palidrome to total
// go through thr string and for the multiples of same letter
// add to total
// for (let i = 0; i< s.length; i++){
//     if(s[i]=== s[i+1]){
//         total ++;
//         // console.log(total)
//         for (let j = 1; j < s.length; j++){
//             if(s[i]=== s[j]){
//                  total ++;
//                  console.log(total)
//              }
//          }
//     }
   
   
// }
var leftIndex = 0;
var rightIndex = s.length -1;
while(leftIndex < rightIndex) {
    s[total] = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = s[total];

leftIndex ++;
rightIndex --;
}
return total + n;
}
console.log(substrCount(4, "aaaa"))