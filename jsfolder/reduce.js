//reduce
//accumulator:final sum added to it
const mynums=[1,2,3];
const myTotal=mynums.reduce(function (acc,curr){
console.log(`acc ${acc} and curr ${curr}`);
return acc+curr},0)
console.log(myTotal)

const shoppingCart=[
    {
        itemName:'shirt',
        price:400
    },
    {
        itemName:'pant',
        price:560
    }
]
    
const ans=shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(ans);