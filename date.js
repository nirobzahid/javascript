let val;
const today = new Date();
val = today;
console.log(val);

let birthday;
birthday = '29/09/1995';
console.log(birthday);

let age = 24;

let getBirthyear;
getBirthyear = function()
{ return 2020 - this.age },
console.log(getBirthyear);

val = today.getDate();
val = today.getFullYear();
val = today.getMilliseconds();
val = today.getTime();
val = today.getUTCMinutes();
val = today.getUTCSeconds();

