// taking a string in a regular 12 hour format returning a string in a 24 hour format only time numbers no AM OR PM
// Remove am/pm from string
// convert hours in a 00: format
// max input is 12
// max output 24
// figure out if its AM or PM - if PM convert HH
// if its Am remve am and return str
// 12:03:06AM
// 09:05:45PM
// 21:05:45
var s = "09:05:45PM"
function timeConversion(s) {
    var output;
    
 if(s.includes("AM")){
   
     s = s.replace("AM","");
     output= s;
 }
 if(s.includes("PM")){
      //  edge cases of 12
     s = s.replace("PM", "");
     var hours = s.slice(0,2);
     console.log(hours)
     hours = (+hours) + 12;
     console.log(hours);
     hours = hours.toString();//"21"
     output = hours + s.slice(2); 
     
 }
 return output;
}
console.log(timeConversion(s));