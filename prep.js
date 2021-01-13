var arry = ["Andrrew", "Moon", "guy"];
var totalChar = 0;
// combine strings in arry
// find total sum of characters

function total_characters(arry) {
    // new variable as a total string
    var string = arry.join('');
    totalChar = string.length;
    return totalChar;
}

console.log(total_characters(arry));


var arry = [304, 5]
var sum = 0;
var numsTotal = 0;
var sumArry = [];
function sum_of_numbers(arry) {
    sum = arry[1] + arry[0];
    sumArry.push(sum);
    var string = arry.join('');
    for (i = 0; i < string.length; i++) {
        numsTotal = numsTotal + (+string[i]);
    }
    sumArry.push(numsTotal);
    return sumArry;
}
console.log(sum_of_numbers(arry));
 [309, 12]