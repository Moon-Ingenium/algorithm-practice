var strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    // look at the letters of all the words in the array
    // compare the letters
    // return letters that are the same as a string
    var prefix ="";
    
    for (var i =0; i<strs[0].length; i++){
        var word = strs[0][i];
        for(var j=1; strs.length;j++){
            
            if(strs[j][i] !== word){
                return prefix;
            }
            prefix = prefix + word
        }
        return prefix;
    }
    
};

console.log(longestCommonPrefix(strs));
