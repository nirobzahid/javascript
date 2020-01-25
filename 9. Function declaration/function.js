//function declaration
function greet(firstName = 'Zahid', lastName = 'Nirob'){
  return 'HELLO' +' '+ firstName+' '+ lastName; 
}
console.log(greet());

//function expression
const square = function(x){
  return x * x
}
console.log(square(10));
//immidiate function expression
(function(){
  console.log('Life is not a bed of rose');
})();

(function(name){
  console.log('hello '+ name);
})('Nirob');

//Property method
const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(10);
todo.delete();
