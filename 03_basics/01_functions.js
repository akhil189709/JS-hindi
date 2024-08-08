user ={
    username : "akhil kumar",
    age : 22
}

function helloUser(anyobject){
    console.log(`the name of the user is ${anyobject.username} and his age is ${anyobject.age}`);
    
}
helloUser(user);//// this is how we can pass the objecets in the functions
 
/////**Passing the array in the functions */

const myNewArr = [100,200,400,300]

function returnTheValue(getArr){

    return getArr[2];

}
console.log(returnTheValue(myNewArr));
console.log(returnTheValue([100,200,300,400]));///this is same as above;
