const form = document.querySelector('form');
const taskInput = document.getElementById('task');

taskInput.value = '';
// //keydown
// taskInput.addEventListener('keydown', runEvent);

// //keyup
// taskInput.addEventListener('keyup', runEvent);

// //keypress
// taskInput.addEventListener('keypress', runEvent);

// //keyfocus
// taskInput.addEventListener('focus', runEvent);

// //keyblur
// taskInput.addEventListener('blur', runEvent);

// //keycut
// taskInput.addEventListener('cut', runEvent);

// //keypaste
// taskInput.addEventListener('paste', runEvent);

//keyinput
taskInput.addEventListener('input', runEvent);

//change
taskInput.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  // console.log(e.target.value);
  // heading.innerText = e.target.value;
  e.preventDefault();//stop bilnking
  //get input value
  console.log(taskInput.value);
}