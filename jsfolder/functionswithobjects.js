/*function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(2,5,7,45 ));
//rest operator ... passing multiple values to function
//also used as spreas operator

//object
*/
const user={
    userName:"Purnima",
    price:120
}
//passing object
function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
    user:"Purn",price:140
})
const myNewarray=[200,500,797];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewarray));