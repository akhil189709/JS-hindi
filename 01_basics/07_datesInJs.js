let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

////date is an object in javascript

let myCreatedDate = new Date("11-08-2024");
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let mytimeStamp = Date.now();
console.log(mytimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());





