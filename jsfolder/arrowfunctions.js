//this keyword: current context
/*const user={
    userName:"purnima",
    price:8000,
    welcomeMessage:function(){
        console.log(`Welcome,${this.userName}`);
        console.log(this);
    }
}
//current context is within this object only.this is used.
user.welcomeMessage();
user.userName="sam";
user.welcomeMessage();
console.log(this);
//here emopty object

initially javascript was executed only in browser now that engine is standalone extracted,global object in browser in window object bu here it is empty*/

/*function chai(){
    console.log(this);
}
chai();
*/
//undefined 
/*const chai=function(){
    let userName="Purnima";
    console.log(this.userName);
}
chai();
*/
/*const chai=()=>{
let userName="Purnima";
    console.log(this.userName);
}
chai();
*/
//()=>{}:arrow functions

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(8,7));

//implicit return :no need to write return
const add=(num1,num2)=>({userName:"Purnima"});
console.log(add(5,4));

//explicit return :using return 

//returning obj

const myArray=[3,2,6,3];
//myArray.forEach(()=>)

