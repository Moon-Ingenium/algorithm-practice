const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
function mergeSortedArray(myArray, alicesArray) {
    const startMyArray = myArray[0];
    const startAlicesArray = alicesArray[0];
    const mergedArray =[];
    if (startMyArray<startAlicesArray){
        mergedArray[0]= startMyArray
    }
    else{
        mergedArray[0]=startAlicesArray
    }
    return mergedArray;
   
}

console.log(mergeSortedArray(myArray, alicesArray));