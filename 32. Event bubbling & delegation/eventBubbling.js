//EVENT BUBBLING
document.querySelector('.card-title').addEventListener('click',function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click',function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click',function(){
  console.log('col');
});

// event delegation
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);


//when we only click on the x then it show delete item
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  //best way to find delete item and we click on x then it will vanish
  if(e.target.parentElement.classList.contains('delete-item') ){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }

}