/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Input: haystack = "hello", needle = "ll"
// Output: 2
// if not in haystackreturn -1
// if need is empty return 0
// return the index of haystack as number
index =-1;
var strStr = function(haystack, needle) {
    for (i=0;i<haystack.length;i++){
        index++;
        if(needle[0]=== haystack[i]){
            return index;
        }
       else if(needle === ""||haystack===""){
            return 0;
        }
        else{
            return -1;
        }
    }

};
     // a couple corner case handling
     int l1 = haystack.length(), l2 = needle.length();
     if (l1 < l2) {
         return -1;
     } else if (l2 == 0) {
         return 0;
     }
 
    
     for (int i = 0; i <= threshold; ++i) {
     // use substring comparison instead of character comparison
         if (haystack.substring(i,i+l2).equals(needle)) {
             return i;
         }
     }
     return -1;
 }