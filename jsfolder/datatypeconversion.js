//conversion of datatypes

/*let score="33abc";

//used when backend is involved value is sent ,don't know the type

console.log(typeof score);

//all data types have capital representation for convversion

let numval=Number(score);
console.log(typeof numval);
console.log(numval);

//nan: not a number 
//when string including alphabets is converted to number,the conversions will have nan values 
//be careful when using it.

let s=Number(null);
console.log(typeof s);
console.log(s);

let r;
console.log(typeof r);
console.log(r);


//33=>33
//"33abc"=>nan
//numm=>0
//true=>1 false=>0
*/
let isLoggedIn="mumma";
let boolIsLoggedIn=Boolean(isLoggedIn);
console.log(boolIsLoggedIn);

//emptystring=>false;
//name/or non empty string=>true;

let num=undefined;
let strnum=String(num);
console.log(strnum);
console.log(typeof strnum);

