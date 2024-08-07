/// Arrays//

const myArr = [1,2,3,4];
const heroes = ["krish","hulk","spider-man"];
console.log(myArr[3]);
console.log(heroes[1]);

let numbers = new Array(1,2,3,4,5,5,6,7);
console.log(numbers);


///Methods in arrays
myArr.push(77);
myArr.push(5343);
myArr.pop();//// removes the last value in the array
myArr.unshift(74);// add the given arrgument to the fist of the array;
myArr.shift();// removes the first element of the array;
console.log(myArr.includes(843));//gives the true or false whether the given element is present in the array or not,this gives the boolean result
console.log(myArr.indexOf(4));//gives  you the index of the given element is present in the array.

let newArr = myArr.join();

console.log(myArr);
console.log(newArr);/// this gives the output in the string form the elements will be the same but the result will be in the string from;
console.log(typeof newArr);// string output 

///slice,splice

console.log("original Array", myArr);

let newArr2 = myArr.slice(1,3);/// this includes the index 1,2 and excludes the 3
console.log(newArr2);
console.log("after the slice operation", myArr);


let newArr3 = myArr.splice(1,3);// this includes the index 1,2,3  , hence it includes both the starting index and the end index 
console.log(newArr3);
console.log("after the splice operattion" , myArr);
///*splice method removes the element from the original array which are present from the starting index to the end index;







