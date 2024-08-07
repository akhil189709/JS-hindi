let marvel_heroes = ["iron-man","hulk", "thor", "captain america"]
let dc_heroes = ["batman", "superman", "flash","wonderwomen"]

const all_heroes = [...marvel_heroes,...dc_heroes]/// here all the values will be spread into the single values

console.log(all_heroes);

const another_array = [1,2,3,4,[12,43,5,3,2],3,32,66,[66,44,22,22,[,9,8,6,5]]]
const another_array2 = another_array.flat(Infinity)// it combines all the elements of the array or the multi dimensional array upto any depth;
console.log(another_array2);

console.log(Array.isArray("akhil"));//// this gives the boolean value whether the given arrgument is array or not
console.log(Array.from("akhil"));/// this converts the given argument into the array, the argument can be string,objects

let score1 = 2223232;
let score2 = 2322;
let score3 = 3222;
let score4 = 2443;
console.log(Array.of(score1,score2,score3));//this converts the variable value into the array elements




