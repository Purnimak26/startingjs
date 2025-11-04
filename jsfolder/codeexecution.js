/*
1.excecution context
2.calls

javascript execution context:how js runs file

whenever cod eis given to js
first global execution context is created and stored in varibale this
different types have diferent global ec

global execution context
function execution context
int mongoose:eval execution context
code runs in two phases

1.memmory creation phase(creation phase)
2.execution phase

in memory phase:memory allocated to variables
let val1=10
let val2=8
function addNum(num1,num2){
let total=num1+num2
return total;
}
let result1=addNum(val1,val2);
let result2=addNum(val1,val2);

first:memory allocation
1>global execution:this
2>memory phase
val1->undefined
all variables are taken and undefined in stored in them
val2:unefined
addNUM->definition
result1=undefined
result2=undefined

this si first cycle

execution phase
val1:10
val2:5
addnum:nothing
3-6:nothing happens
result1=different execution context
result2:differen texecution context
