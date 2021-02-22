function bears(x, s){
    let resultArray = [];
    let boolean = false;
    let string = "";
    // iterate through string for b& 8
    // add to string
    // if pairs equals x return true;
for(let i= 0; i<s.length; i++){
        if(s[i]=== "B"  && s[i+1]=== "8" ){
            string = string + s[i] + s[i+1]
            i++;
        }
        else if(s[i]=== "8" && s[i+1]==="B"){
            string = string + s[i] + s[i+1]
            i++;
        }
       
}
resultArray.push(string);

if((string.length/2) >= x){
    boolean = true;  
}

resultArray.push(boolean);

    return resultArray;
  }
  console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'));