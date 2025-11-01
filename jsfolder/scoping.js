
//curly braces:scope
/*
{}:scope
*/
/*var c=300;
let c=60
if(true){
let a=10
const b=20
var c=30;
}
/*console.log(a);
console.log(b);

console.log(c);
*/

let a=50// global
var c=90
if(true){
    let a=80  //local scope
    console.log("Hello ",a);
    var c=43
}
console.log(a);
console.log(c);

/* browser scope and the one we use here are different*/


