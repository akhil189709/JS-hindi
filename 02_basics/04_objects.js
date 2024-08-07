const tinderUser1 = new Object();//// this is the singleton object
const tinderUser = {} /// this is non-singleton object

tinderUser.id = "122dd"
tinderUser.name = "akhil kumar"
tinderUser.age = 22
tinderUser.isLoggedIn = false

console.log(tinderUser);
// console.log(tinderUser2);

const regularUser  = {
    email : "akhildhiman1897@gmail.com",
    fullName : {
            userFullName :{
            firstName : "akhil",
            lastName : "kumar"
        }
    },
    age : 22
}
console.log(regularUser.fullName.userFullName.firstName);


const obj1 = { 1: "a", 2:"b", 3:"c"}
const obj2 = { 4: "a", 5:"b", 6:"c"}
const obj3 = { 7: "a", 8:"b", 9:"c"}
const obj4 ={...obj1, ...obj2, ...obj3}
console.log(obj4);
console.log(typeof obj4);

const user =  [
    {
        id : 10,
        email : "akhil@gmail.com"

    },
    {
        id : 11,
        email : "akhil2@gmail.com"

    },
    {
        id : 12,
        email : "akhil3@gmail.com"

    }
]
console.log(user[2].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));/// this will convert the values into the arrays , the first value will be the key and the second value will be the value

console.log(tinderUser.hasOwnProperty("name"));// this will return the boolean value


///  DECONSTRUCTING///

const course ={
    courseName : "js-hindi",
    courseInstructor : "akhil",
    coursePrice : "999"
}

const{coursePrice:price} = course;//// this will extract the value from the object and we can use this value again and again very easilys
console.log(price);


