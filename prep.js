var arry= ["Andrrew", "Moon", "guy"];
var totalChar= 0;
// combine strings in arry
// find total sum of characters

function total_characters(arry){
    // new variable as a total string
    var string = arry.join('');
    totalChar = string.length;
    return totalChar;
}

console.log(total_characters(arry));