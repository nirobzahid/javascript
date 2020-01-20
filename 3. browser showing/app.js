const name = 'Nirob';
const age = 24;
const city = 'Dhaka';
const fvrtColor = 'Green';
const status = 'Student';
const contact = '01710766399';
const laptope = 'HP';

//without templete string
let html;
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>City: ' + city + '</li><li>fvrtColor: ' + fvrtColor + '</li><li>status: ' + status + '</li><li>contact: ' + contact + '</li></ul>';
document.body.innerHTML = html;

let html1;
html1 = '<ul>'+
    '<li>Name: ' + name + '</li>'+
    '<li>age: ' + age + '</li>'+
'<li>fvrtColor: ' + fvrtColor + '</li>'+
    '<li>city: ' + city + '</li>'+
    '<li>status: ' + status + '</li>'+
    '<li>contact: ' + contact + '</li>'+'<li>laptope: ' + laptope + '</li>'+
    '</ul>';

    document.body.innerHTML = html1;


    //now with templete string(es6)
    let html2;
    function hello(){
      return 'welcome';
    }
    html2 = 
    `<ul>
    <li>Name:${name}</li>
    <li>age:${age}</li>
    <li>city:${city}</li>
    <li>status:${status}</li>
    <li>${10+10}</li>
    <li>${hello()}</li>
    <li>${age > 25 ? 'over 25' : 'under 25'}</li>

     </ul>`
          ;
          document.body.innerHTML = html2;