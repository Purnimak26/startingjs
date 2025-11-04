//truthy and falsy values
const userEmail=[];
if(userEmail){
    console.log(userEmail);
}
else{
    console.log("No userEmail")
}
//false,0,-0,BigInt,nan,undefined,null :falsy values
/*
truthy values
"0",'false'," ":any value added to string ,{},(),function(){}
[]
*/
if(userEmail.length==0)
{
    console.log("empty")
}
const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("Onject is empty");
}
/* logical opertaors
1.&&
2.||
3>Nullish coalescing operator(??): null undefined
*/
let val1;
//val1=5??10
/*
sometime(firebase) database does not give direct response for that there are two possible cases 
1>value does not come 
2>null response
treat values as null or undefined
*/
val1=null??10;
val1=undefined??15;
console.log(val1);
//returns the first value encountered

val1=null??10??20;
console.log(val1);

/* ternary operator
condition?true:false
*/
/* plays a different role*/

const icePrice=100;
icePrice>50?290:5;
console.log(icePrice); 