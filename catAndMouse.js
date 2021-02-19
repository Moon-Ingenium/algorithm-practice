function catAndMouse(x, y, z) {

let mouse = z;
let winner = '';
 let catDistanceA = Math.abs(z-x);
 let catDisntanceB = Math.abs(z-y);

 if (catDistanceA < catDisntanceB){
     winner = "Cat A"
 }
 else if( catDisntanceB < catDistanceA)
 {
     winner = "Cat B"
 }
 else{
     winner = "Mouse C"
 }

return winner;

}
console.log(catAndMouse(1, 3, 2));