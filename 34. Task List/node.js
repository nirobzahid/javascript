//DEFINE UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listener
loadEventListeners();
function loadEventListeners(){
  form.addEventListener('submit', addTask);
}
function addTask(e){
  if(taskInput.value === ''){
    alert('add a task');
  }
//create li element
const li = document.createElement('li');
//add class
li.className = 'collection-item';
//create node and append to li
li.appendChild(document.createTextNode(taskInput.value));
//create new link
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li
li.appendChild(link);

taskList.appendChild(li);
//clear input
taskInput.value = '';

e.preventDefault();
}