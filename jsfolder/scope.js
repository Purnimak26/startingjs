/*
nested scopes 
closures:need dom for it document object model :how to manipulate html using javascript

*/

/*
nested scope
*/
/*function one(){
    const userName="Purnima";
    function two(){
        const website="Youtube";
        console.log(userName);
    }
    //c//onsole.log(website);
    //here this statement will not be executed because website was declared in function two so its scope was that function but username is declared in function one and function two scope was also that

    two();
}
one();
two();
*/

/* nested functions */
l=addone(8);
console.log(l);
function addone(num){
    return num+1;
}

const addTwo=function(num){
    return num+2;
}
//hoisting

