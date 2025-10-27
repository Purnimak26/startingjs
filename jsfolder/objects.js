//singleton
/*object of one type only
if object is created by constructor,then singleton 
else,multiple instances
*/
//object literals
//key and values
/*
const mysymbol=Symbol("key1");

const JsUser={
    name:"Mumma",
    age:18,
    [mysymbol]:"Key1",
    location:'Sydney',
    email:'purn@gmail.com',
    isLoggedIN:['Tuesday','Wednesday']


}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log( typeof JsUser[mysymbol]);
JsUser.email='psharma';
//Object.freeze(JsUser);
JsUser.email='p26';
console.log(JsUser.email);
JsUser.greeting = function(){
    console.log(`Hello, dearest ${this.name}`);
}
console.log(JsUser.greeting())
*/
/*const Tinder=new Object();//snglenton
console.log(Tinder);
Tinder.id=123;
Tinder.name='purnima'
Tinder.age=40
console.log(Tinder);
const regularUser={
    email:'purn',
    fullname:{
        firstname:'Purnima',
        lastname:'sharma'
    }
}
console.log(regularUser.fullname.lastname)
const obj1={1:'a',2:'b',3:'c'}
const obj2={6:'a',7:'b',8:'c'}
const obj3={obj1,obj2}
console.log(obj3)
const obj4=Object.assign(obj1,obj2)
console.log(obj4)

const obj5={...obj1, ...obj2};
console.log(obj5)

const users=[
    {
        id:1,
        email:"Purn"
    }
]
//backend:values from database come as arrays of objects
console.log(users[0].email)
*/
const tinderUser={
    id:1,
    name:"Purn",
    age:56
}
console.log(tinderUser);
console.log(Object.keys(tinderUser))
//here the keys are returned as an array

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('Islogges'))
