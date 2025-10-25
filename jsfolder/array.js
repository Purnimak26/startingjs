//arrays
const myArray=[0,1,2,3,4,5];
//elements can be different as well
console.log(myArray);
/*
1.arrays are resix=zble in js
2.supports variables of different data types
3.0-indexed
*/
console.log(myArray[4]);
//shallow copy:changes made in both (heap)
//deep copy:independent copy (stack)

/*let arr=new Array(1,0,6,7)
console.log(arr)
let flowers = ['lily', 'daisy', 'rose', 'lotus'];
flowers.push('tulip');
console.log(flowers);
console.log(flowers.length);
flowers.pop()
flowers.unshift(0);
//here all values are shifted
console.log(flowers);
flowers.shift()
let fleur=flowers.join();
console.log(fleur);
console.log(flowers);
console.log(typeof fleur)
*/
//slice and splice


let arr=[1,2,3,4];
console.log(arr);
//slice
console.log(arr.slice(0,3));
console.log(arr.splice(0,3))
console.log(arr);
//slice doesn't manipulate the array
//splice deletes the given section from array

const even=[2,4,6,8,10]
const odd=[1,3,5,7,9];
/*even.push(odd);
console.log(even)
even.concat(odd);
*/
const newarr=even.concat(odd);
console.log(newarr)
const arr2=even+odd;
console.log(arr2)
const allnew=[...even,...odd]
console.log(allnew)

const anotherarray=[1,2,3,[4,5,6],7,[6,[7,[4,5]]]];
console.log(anotherarray.flat(2));
console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));
let score1=100;
let score2=300;
let score3=500;
console.log(Array.of(score1,score2,score3))