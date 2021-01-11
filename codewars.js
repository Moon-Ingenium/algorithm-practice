function digital_root(n) {
    var result;
   function sumOfNumbers(input){
     var sum = 0;
     var num = input.toString();
      for(i=0;i<num.length;i++){
        sum = sum + (+num[i]);
      }
     return sum
  } 
    result = sumOfNumbers(n);
  if(result>9){
  result = sumOfNumbers(result);
    }
    console.log(typeof(result))
    return result;
  }

console.log(digital_root(5060));
function descendingOrder(n) {
var nArray = n.toString().split("");
 var resultArry = nArray.sort((a, b)=> a - b);
    console.log(resultArry)
    var result = resultArry.reverse().join('');

   return +result;
}
console.log(descendingOrder(145263));