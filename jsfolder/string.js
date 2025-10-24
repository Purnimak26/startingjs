/*const name="niya"
const repoCount=90
console.log(name+repoCount)

// use backticks

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);
*/
const newName=new String('HelloWorld');
/*console.log(newName)
console.log(newName[3]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName)
console.log(newName.charAt(4));
console.log(newName.indexOf('r'));
*/
const newString=newName.substring(2,7);
console.log(newString)

const anotherString=newName.slice(-8,5);
console.log(anotherString);

const newstr=String("     h  t yyy")
console.log(newstr.trim())

console.log(newName.replace('d','p'));

console.log(newstr.includes('p'));

const str="hellopworldphello";
console.log(str.split('p'))
console.log(str.split('h'));