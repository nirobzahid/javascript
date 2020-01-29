//document.getelementByclass name
const items = document.getElementsByClassName('collection-item');
console.log(items);//all item showed
console.log(items[0]);//only first item showed
//if we change something
items[0].style.color = 'red';
items[3].textContent = 'hello world';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.getElementBytagName
let lis = document.getElementsByTagName('li');
console.log(items);
//we can call certain list
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Nirob';
lis[3].style.color = 'red';

//convert HTML to array
//it showed like array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li, index) {
  console.log(li.className);
li.textContent = `${index}: Nirob`;//all the name gonna be Nirob and its goes 4 to 0 because we set a reverse string
  
});
console.log(lis);

//document.querySelectorAll
//we didn't convert it to array but it showed like array
const itemss = document.querySelectorAll('ul.collection li.collection-item');
itemss.forEach(function(item, index) {
 
item.textContent = `${index}: Nirob`});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(li, index) {
 li.style.background = 'red'
 });

 const liEven = document.querySelectorAll('li:nth-child(even)');
// liEven.forEach(function(li, index) {
//  li.style.background = ' orange'
//  });
//we can use this using for loop
for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'yellow';
}

console.log(itemss);