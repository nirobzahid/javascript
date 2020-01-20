const age = 24;
const classs = 16;

let html;
html = `<ul>
<li>age : ${age}</li>
<li>class : ${classs}</li>
<li>${age > 25 ? 'over 25' : 'under 25'}</li>
<li>${classs > 12 ? 'graduate program' : 'college'}</li>
</ul>`
document.body.innerHTML = html;



//create some arrays
const numbers = [12,11,1,3,66,99,10,20,30,40,50];
const numbers2 = new Array(55,44,66,77,88);
const game = ['cricket','football','badminton',' ',' '];
const mixed = ['apple',65,true,new Date(),{a:1,b:2}];

console.log(game);
console.log(mixed);

//array insert/identify/position
let value;
value = numbers.length;
numbers[3] = 1000;
value = numbers.indexOf(1000);
value = numbers[0];
value = Array.isArray(numbers);

//mutating array
//add to end
numbers.push(222);
//add to front
numbers.unshift(120);
//take of from front
numbers.shift();
//take of from last
numbers.pop();

//splice value(delete value from anywhere)
numbers.splice(1,2);
numbers.reverse();

//sorting arry
value = numbers.sort(function(x,y)
{return x-y});

//find
function under50(numbers){
  return numbers < 50;
  value = numbers.find(under50);
}
//concate array
value = numbers.concat(game);

console.log(numbers);
console.log(value);

//check
let anotherCheck;
anotherCheck = game.length;
game[3] = 'kabadi';

anotherCheck = game[0];
anotherCheck = Array.isArray(game);
game.push('hocky');

anotherCheck = game.concat(mixed);

anotherCheck = game.sort();
console.log(game);
console.log(anotherCheck);







