//Immediately Invoked Function Expressions(IIFE)

//immediately execute the function

//if there is a fucnctiona nd we want to immediately use it
/*
exmaple:datatbase connection
if we want it to start when application starts
*/
//named iife
(function chai(){
    console.log('DB Connected');
})();
//unnamed iife
//whenever wrriting two iifes together use ;
(()=>{
    console.log("DB TWO");
}) ();


