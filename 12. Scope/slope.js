//Global scope
var a = 1;
let b = 2;
const c = 3;
console.log('Global scope: ', a,b,c);

//function scope
function test(){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('function scope: ',a,b,c); 
}
test();

//block scope
//block scope show the same value as globe scope
if(true){
  var d = 7;
  let e = 8;
  const f = 9;
  console.log('Block scope: ',a,b,c);
}

//loop scope
for(var a = 0; a<10;a++){
console.log(`loop: ${a}`)
}

for(let a = 0; a<10;a++){
  console.log(`loop: ${a}`)
  }

  for(const a = 0; a<10;a++){
    console.log(`loop: ${a}`)
    }