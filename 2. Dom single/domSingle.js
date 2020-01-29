//document.get element by id
console.log(document.getElementById('task-title'));

//get things from elemnt
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//if we declare a variable and link it to getElementbyid than it is more efficient like that 
const taskTitle = document.getElementById('task-title');
//change style
taskTitle.style.background = 'red';
taskTitle.style.color = 'blue';
taskTitle.style.padding = '10px';

// //change style//we can work like css by js
// document.getElementById('task-title').style.background = 'red';
// document.getElementById('task-title').style.color = 'blue';
// document.getElementById('task-title').style.padding = '10px';

//change content
taskTitle.innerText='My task A';
taskTitle.textContent='My task A';//same work like innerText
taskTitle.innerHTML= '<span style="color:white">Task list A</span>';

//change content
document.getElementById('task-title').innerText='My task A';
document.getElementById('task-title').textContent='My task A';//same work like innerText
document.getElementById('task-title').innerHTML= '<span style="color:white">Task list A</span>';

//document.querySelector()
//we call anything from CSS...and it show only first element
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
//we can change color
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'green';//same work like before
document.querySelector('li:last-child').style.color = 'red';
//it can change a single value
document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:nth-child(4)').style.color = 'blue';
//we ccan change text and color also
document.querySelector('li:nth-child(4)').textContent = 'hello world';

document.querySelector('li:nth-child(4)').style.background = 'gray';
