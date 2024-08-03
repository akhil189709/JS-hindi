 const name = "akhil kumar";
 const repoCoutn = 23;
 console.log(`Hello my is ${name} and my repocount is ${repoCoutn}`);
 
 const gameName = new String("akhilkumar");
 console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));

console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4); /// last value is not included here in this function
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);


const newStringOne = "    akhil     "
console.log(newStringOne);
console.log(newStringOne.trim());/////removes the starting spaces and the end spaces 








 