//objects literals


const Mysymbol = Symbol("key1")
const jsUser = {
  
    name :"akhil",// here name is consider as a string
    age : 22,
    location : "noida",
    email : "akhilsingh189709@gmail.com",
    isLoggedIn : false,
    lastLogInDay: ["moday","tuesday"],
    "fullName" : "Akhil Kumar",
    [Mysymbol] : "key1" // here we have to use the square brackets to use the symbol data type as a key, otherwise the the symbol data type will be converted to the string type
}//// In the objects creation the keys are treated as the strings thats why this happens
console.log(jsUser.name);
console.log(jsUser["age"]);
console.log(jsUser["fullName"]);
console.log(jsUser[Mysymbol]);

// changing the values of the objects

jsUser.name = "akki dhiman";
console.log(jsUser["name"]);

// To lock the values of the objects

// Object.freeze(jsUser);
jsUser.email = "akhil.kumar.cse.2020@miet.ac.in";
jsUser.name = "gujju"
console.log(jsUser);

///functions in js

 jsUser.greeting = function(){
    console.log("hello js user");
}
 jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.location}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());







