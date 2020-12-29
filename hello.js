var letterArray = ['h','e','l','l','o'];
function reverseLetters(letterArray){   
    var leftIndex = 0;
    var rightIndex = letterArray.length -1;
   while(leftIndex < rightIndex) {
   var newarray = letterArray[leftIndex];
   letterArray[leftIndex]=letterArray[rightIndex];
   letterArray[rightIndex]=newarray;
   leftIndex ++;
   rightIndex --;
   }
       
    } 
    reverseLetters(letterArray);
    console.log(letterArray)

