/**
 * @param {number} n
 * @return {number}
 */
// 4
var fib = function(n) {
    // 0,1,1,2,3,5,8,13
        if (n === 1 || n === 0) return n
        let count = 2;
        let first = 0; //1,1,2,3
        let second = 1; //1,2,3,5
        let tempSecond;
        
        while (count <= n) {
            count++;
            tempSecond = second;
            second = first + second;
            first = tempSecond;
            
        }
        
        
        
        return second;
    };