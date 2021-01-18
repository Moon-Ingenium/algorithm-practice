// // taking a string in a regular 12 hour format returning a string in a 24 hour format only time numbers no AM OR PM
// // Remove am/pm from string
// // convert hours in a 00: format
// // max input is 12
// // max output 24
// // figure out if its AM or PM - if PM convert HH
// // if its Am remve am and return str
// // 12:03:06AM
// // 09:05:45PM
// // 21:05:45
// var s = "09:05:45PM"
// function timeConversion(s) {
//     var output;
    
//  if(s.includes("AM")){
   
//      s = s.replace("AM","");
//      output= s;
//  }
//  if(s.includes("PM")){
//       //  edge cases of 12
//      s = s.replace("PM", "");
//      var hours = s.slice(0,2);
//      console.log(hours)
//      hours = (+hours) + 12;
//      console.log(hours);
//      hours = hours.toString();//"21"
//      output = hours + s.slice(2); 
     
//  }
//  return output;
// }
// console.log(timeConversion(s));
var n = 123456789;
function descendingOrder(n){
    //...loop through each number
  //   push them in an arry
  //   sort array
  //   rejoin 
  //   make into a number
    var arry = [];
  n = n.toString();
  console.log(n)
   for (var i =0; i<n.length;i++){
     var num = n[i];
     arry.push(num);
     
   }
   console.log(arry)
    arry.sort((a,b)=> a-b);
    arry.reverse();
    var sorted = arry.join("");
    return +sorted;
  }
  console.log(descendingOrder(n))
//   https://us02web.zoom.us/j/4428990476?pwd=L0h4N1JGTVFqMmRFSlhzN0lUNGhUQT09