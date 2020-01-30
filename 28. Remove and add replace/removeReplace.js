//create element
const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title';//task title is the old heading we call it by id and h5 id is task-title

//new text node
newHeading.appendChild(document.createTextNode('Task list'));

//Get the old heading
const oldHeading = document.getElementById('task-title');

//parent
const cardAction = document.querySelector('.card-action');//card-action is a class and h5 is written there so we have to call the parents node...before call the class we use (dot)

//replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
lis[0].remove();//1st item deleted
//we can call it by child name
list.removeChild(lis[3]);//4th item deleted


//classesand attribute
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let  val;

val = link.className;
val = link.classList;
//val = link.classList[0];//only first item showed
link.classList.add('test');
link.classList.remove('test');//we can easily add and remove a class
val = link;

//Attributes add and remove
val = link.getAttribute('href');
val = link.setAttribute('href',  'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
//link.removeAttribute('title'); 
val = link;


console.log(val);