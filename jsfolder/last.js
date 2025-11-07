const myNumbers=[1,2,3,4,5,6,7,8,9,10];
myNumbers.filter((num)=>num+=10);
console.log(myNumbers)
const newNumbers=myNumbers.forEach((num)=>{
    return num+10;
})
console.log(newNumbers)
const newnums=myNumbers.map((num)=>num+10);
console.log(newnums)

//chaining using several metgods together

const op=myNumbers.map((num)=>num+10).map((num)=>num*10);
console.log(op);