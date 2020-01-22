// basic stracture 
// if(something)
// {
//   do somthing
// } else {
//   do something else
// }
const age = 25;
if (age > 25){
  console.log('more adult');
} else
{
  console.log('less adult');
}
//  //EQUAL
const id1 = 500;
if (id1 == 500) {
  console.log('correct');
} else {
  console.log('incorrect');
}

 //Not EQUAL
 if (id1 != 501) {
   console.log('correct');
 } else {
   console.log('incorrect');
 }

 //EQUAL to value and type
 if (id1 === 500) {
  console.log('correct');
} else {
  console.log('incorrect');
}

 //notEQUAL to value and type
 if (id1 !== 500) {
  console.log('correct');
} else {
  console.log('incorrect');
}

//test if undefined
if(typeof id !=='undefined'){
console.log(`the ID is ${id}`)
}else{
console.log('no id');
}

//  //EQUAL
const number = 500;
if (number > 500) {
  console.log('large');
} else {
  console.log('small');
}

// nested if else
const color = 'yellow';

if(color === 'red')
{console.log('The color is red');}else if(color === 'blue')
{console.log('The color is blue');}else if(color === 'pink')
{console.log('The color is pink');}else if(color === 'black')
{  console.log('The color is black')}else if(color === 'white')
{  console.log('The color is white');}
else
{  console.log('No color match');}


//logical operator
const name = 'Nirob';
const ages = 24;

if(ages > 0 && ages < 12){
  console.log(`${name} is a child`);
}
else if(ages >= 12 && ages <=19){
  console.log(`${name} is a teenager`);
}
else{
  console.log(`${name} is an adult`);
}

//OR opeartion
if(ages < 16 || ages > 70 ){
console.log(`can't take part in competition`);
}else{
  console.log(`${name} can take part in competition`);
}

//Ternary operator(":" = else)
const Numbers = 100;
console.log(Numbers === 100 ?'correct' : 'incorrect');


const number1 = 100;
const number2 = 100;
console.log(number1 > number2 ?'correct' : 'incorrect');





//without bracets
if(Numbers === 100)
console.log('correct');
else
console.log('incorrect');
