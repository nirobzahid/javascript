//new
let today=new Date();
console.log(today);

let val;
const firstName='Zahid';
const lastName='Hasan';
const age = 24;
val=firstName+' '+lastName;
val='Welcome to my party. I am '+firstName+' and I am very glad to have you here.'
val+=' This is my '+age+' th birthday. So keep me in your prayer.'
console.log(val);

//escap
let escap;
escap = "That 's awesome, I can\ 't wait.";
console.log(escap);

//length
let length;
length = firstName.length;
console.log(length);

//concate
let concate;
concate = firstName.concat(' '+lastName);
console.log(concate);

//change case
let changeCase;
changeCase = firstName.toUpperCase();
console.log(changeCase);

//substring
let substring;
substring = firstName.substring(0,4);//o-4 character show
console.log(substring);

//slice
let slice;
slice = firstName.slice(0,4);//o-4 character show,same as substring
console.log(slice);

//split
let splitSomething;
const str = 'Hello my name is Nirob';
splitSomething=str.split(' ');
console.log(splitSomething);

//replace
let replaceSomething;
const strs ='I am Nirob';
replaceSomething = strs.replace('Nirob','Zahid');
console.log(replaceSomething);

//include//it gives true/false 
val = firstName.includes('Zahid');
console.log(val);

let includeSomething;
const strss = 'Hello my name is Nirob';
includeSomething=strss.includes('zahid');
console.log(includeSomething);








