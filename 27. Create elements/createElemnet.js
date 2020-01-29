//create element
const li = document.createElement('li');

//add class
li.className = 'collection-item';

//add id
li.id = 'new-item';

//add atribute
li.setAttribute('title','new item');

//create text node and append
li.appendChild(document.createTextNode('Hello world'));


//create new link element
const link =  document.createElement('a');

//add class
link.className = 'delete-item secondary-content';

//add icon into li
link.innerHTML = '<i class="fa fa-remove">';

//append link into li
li.appendChild(link);



//This is the main link (do it first)
//append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

