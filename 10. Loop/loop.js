//For loop
for(i = 0; i<=10; i++){
  if(i===2){
    console.log('2 is my favourite number')
    continue;
  }

  if(i===6){
    console.log('stop the loop')
    break;
  }
  
  console.log('Number '+i);//we use space in string
}



// while loop(set the variable outside the loop)
console.log('start a while loop');
let a = 1;
while( a <= 10){
  console.log('Number '+a);
  a++;
}


//do while loop
console.log('write a do while loop');
let b = 1;
do{
  console.log('Number '+b);
  b++;
}
while(b < 10);


//loop through array
console.log('new loop through Array');
const food = ['pizza','burger','hot dog','pasta'];
for(let f=0; f<food.length; f++){
console.log(food[f]);
}
console.log('same result using forEach');



//same result using forEach
food.forEach(function(food, index){
  console.log(`${index} : ${food}`);
});

//MAP
const user = [
  {id : 1, name:'rahim'},
  {id : 2, name:'karim'},
  {id : 3, name:'kuddus'},
  {id : 4, name:'jabbar'},
];
const id = user.map(function(user){
  return user.id;
});
console.log(id);



//loop in 
const users = {
  firstName : 'Zahid',
  lastName : 'Hasan',
  age : 24
};

for(let x in users){   //x in loop
  console.log(`${x} : ${users[x]}`);
}