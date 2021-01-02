var reverse = function(x) {
    var result = 0;
    var isNegative = x < 0;
    var num = isNegative ? Math.abs(x) : x;
    // 32 bit limit: 2,147,483,647
    
    // convert to string
    // reverse string
    // convert to number
    // return 0 if number > limit || less - limit
    // make sure negative stays at front
    // if str[0] === '-'
    var numStr = JSON.stringify(num);
    numStr = numStr.split('').reverse().join('');
    
    // num = isNegative ? +'-'+numStr : +numStr;
    if (isNegative) {
        numStr = -Math.abs(numStr);
    } else {
        numStr = Math.abs(numStr);
    }
    if (!numStr > 2,147,483,646 || !numStr <  -2,147,483,646) {
        result = numStr;
    }
    
    return result;
};

console.log(reverse(1534236469))