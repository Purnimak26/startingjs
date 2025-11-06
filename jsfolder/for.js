const coding=["js","ruby","python","c++","java"];
//coding.forEach(function name(){})
//it's a callback function don't give it a name
coding.forEach((item)=>{
    console.log(item[2]);
})
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})