let val;
let val1;
let val2;
let val3;
let val4;
let val5;
let val6;
let val7;
let val8;

val = document;
val = document.head;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.domain;
val = document.elementFromPoint;
val = document.URL;
val = document.doctype;
val = document.body;
val = document.forms;
val = document.forms[0];
val = document.forms[1];
val1 = document.forms[0].method;
val2 = document.forms[0].action;
val3 = document.links;
val = document.links[0];
val = document.links[0].id;
val4 = document.links[0].className;
val5 = document.links[0].classList[0];

val6 = document.nodeType
val7 = document.scripts;
val8 = document.scripts[2].getAttribute('src');


console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);
console.log(val8);


let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});







