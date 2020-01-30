document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello world');//if we click clear task then hello world showed in console...we put a # in href in clear-task 
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
  let val;
  val = e;

//event target element
val = e.target;
val = e.target.id;
val = e.target.className;
val = e.target.classList;

//we can change "clear tasks" button text
e.target.innerText = 'Hello';//the "clear tasks" gonna be hello

//event type
val = e.type;

//timeStamp
val = e.timeStamp;//it gives a number

//co ordinates event relative to the window
val = e.clientX;
val = e.clientY;

////co ordinates event relative to the element
val = e.offsetX;
val = e.offsetY;


  console.log(val);
}