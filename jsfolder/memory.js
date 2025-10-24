/* memory allocation in javascript

1.stack
2.heap

primitive types:stack memory

non primitive:heap memory

whenever stack memory is used,we get copy of value


whenever heap memory is used,its call by refernce which emans changes are done in the original value

*/
let myYtName="Krystle";

let anotherYtName=myYtName;
console.log(anotherYtName);//passed by value

anotherYtName="Vritika";
console.log(myYtName);
console.log(anotherYtName);

let user1={
    email:"purn@gmail.com",
    upi:"p123"
}
let user2={
    email:"sush@gmail.com"
}
user2.email=user1.email;
user1.email="ps123@gmail.com"
console.log(user1.email);
console.log(user2.email);
//passed by refernce:non primitive





