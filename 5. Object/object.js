const myself = {
  firstName : 'Zahid',
  lastName : 'Hasan',
  age : 24,
  email : 'nirob.nr1912@gmail.com',
  Address : {
    Road : "'18/1' , 'Mohammadpur'",
    City : 'Dhaka',
  },
  //create a function
  getBirthYear : function(){
    return 2020 - this.age;
  }
}
let val;
val = myself;
val = myself.firstName;

console.log(val);

let val1;
val1 = myself;
val1 = myself.age;
console.log(val1);

let val2;
val2 = myself;
val2 = myself.Address;
console.log(val2);

let val3;
val3 = myself;
val3 = myself.getBirthYear;
console.log(val3);