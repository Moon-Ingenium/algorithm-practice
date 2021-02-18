// var arry = ["Andrrew", "Moon", "guy"];
// var totalChar = 0;
// // combine strings in arry
// // find total sum of characters

// function total_characters(arry) {
//     // new variable as a total string
//     var string = arry.join('');
//     totalChar = string.length;
//     return totalChar;
// }

// console.log(total_characters(arry));


// var arry = [304, 5]
// var sum = 0;
// var numsTotal = 0;
// var sumArry = [];
// function sum_of_numbers(arry) {
//     sum = arry[1] + arry[0];
//     sumArry.push(sum);
//     var string = arry.join('');
//     for (i = 0; i < string.length; i++) {
//         numsTotal = numsTotal + (+string[i]);
//     }
//     sumArry.push(numsTotal);
//     return sumArry;
// }
// console.log(sum_of_numbers(arry));
//  [309, 12]   let maxProfit = 0;
var maxProfit = function(prices) {
   
    let maxProfit = 0;
    let min;
//     edge case must before selling
//     index of sell day must be larger than buy day
//     loop through the array to find the cheapest day to buy
//     loop through the array to max profit
//     index cannot be the same
    // subtract max num - min num 

        let buy = Math.max(...prices);
        let sell = Math.min(...prices);
        if(prices.indexOf(buy)< prices.indexOf(sell)){
            
        }
    maxProfit = buy - sell;
   console.log(buy)
   console.log(sell);
 
    // console.log(maxProfit)
    return maxProfit;
   
};
maxProfit([7,1,5,3,6,4]);