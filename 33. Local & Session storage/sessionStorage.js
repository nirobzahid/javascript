// // //set local storage item;local storage remain until we remove it from it
// // localStorage.setItem('name', 'Zahid');
// // localStorage.setItem('age', '24');

// // //set session storage item;if we close the browser the session storage will vanish
// // sessionStorage.setItem('name', 'nirob');

// // //remove from storage
// // localStorage.removeItem('name');

// // //get from storge//show in browser
// // const name = localStorage.getItem('name');
// // const age = localStorage.getItem('age');

// // //clear local storage
// // localStorage.clear();


// // console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e){
//   const task = document.getElementById('task').Value;

//   let tasks;

//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];}
//     else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     alert('Task saved');

//     e.preventDefault();
  
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function(task) {
//   console.log(task);
  
// });



function greet(firstName = 'Zahid', lastName = 'Hasan')
{
  return 'Hello '+ firstName +' '+ lastName;
}
console.log(greet());