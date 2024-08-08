
let c =300;

if(true){
    const a = 1;
    let b = 33;
    let c = 200
  console.log("inner:",c);
  
}
// for (let i = 0; i < array.length; i++) {
//     const element = array [i];
    
// }
// console.log(a);
// console.log(b);
console.log("outer:",c);

function one(){
    const username = "akhil"
   
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "akhil"
    if(username === "akhil"){
        let website = "youtube"
        console.log(username +  website);
    
    }
    // console.log(website); this is out of scope of the inner if statement


    
}
// console.log(username); this out of scope of  the outer if statement




//+++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++///

function addone(num){/// this we can call before the initialization of the function
    return num + 1
}
console.log(addone(44));

const addNum = function(number){/// in js the variables can be treated like the functions and they can hold any functions

    return number*4;
}
console.log(addNum(2));///here we treate the variable like the functions

// when we hold the function in the variable we cannnot call before the initialization of the function
