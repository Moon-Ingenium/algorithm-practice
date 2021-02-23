function deleteNth(arr,n){
 let resultArray = [];
 let count = 1;
 let map = new Map();
 let mapValue;
 let key;
//  go through the array and check for n number of movies
// if < n push into array
 for(let i =0; i< arr.length;i++){
     key = arr[i]
     mapValue = map.get(key);
     if (mapValue) {
         map.set(key, mapValue += 1);
        //  map[key] += 1
     } else {
         // the key is undefined
         map.set(key, 1)
        //  map[key] = 1
     }
//      // initializing new key to count
//    map[arr[i]] = count;
//   if (arr[i] === map[arr[i]]){
//       // if value in array is equal to the value of the key arr[i[]]
//       map[arr[i]] = count ++;
//   }
}
 console.log(map)
 let lowerNum;
 for(let num of map.keys()) {
     lowerNum = Math.min(n, map.get(num));
    //  console.log(num)
     // you were checking the key, not the value ex: num <= n
    //  if (map[num] <= n){
         // you still need to push it in n number of times to the result, n being the value
         for (var i = 1; i <= lowerNum; i++) {
             resultArray.push(+num);
         }
    //  }
 }
 return resultArray;
  }
  console.log(deleteNth([1,1,7,3,3,2,2,2,2], 3), 'delete')

  