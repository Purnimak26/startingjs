//control flow
/* 
1.if(condition){};
2.else{}
    */
const isuserLoggedIN=true //used as condition

/*comparison operators

<
>
<=
>=
!=
==
===


if(2=="2"){
    console.log("Hello");
}
const temperature=60;
if(temperature<50){
    console.log("Less than 50");
}
else{
    console.log("Greater than 50")
}

var score=200;
if(score>100){
    var power="fly";
    console.log(`user power${power}`);
}
    console.log(`user power${power}`);
/*
shorthand notation
*/
const balance=1000;
if(balance>500) console.log("test"),console.log("Heo");

//donot do like this but

if(balance<500){
    console.log("Less than 500");
}
else if(balance<750){
    console.log("less than 750")
    }
else if(balance<900){
    console.log("Less than 900");
}
else{
    console.log("less than 1200")
}

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInEmail=true;
if(userLoggedIn && debitCard ){
    console.log("Allowed to buy courses");
}
if(loggedInFromGoogle ||loggedInEmail ){
    console.log("User Logged IN");
}