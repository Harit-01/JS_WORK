const useremail=[]

if(useremail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function()

if(useremail.length===0){
    console.log("Array is empty");
}

const emptyobj={};
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1=5 ?? 10;
//val1=null ?? 15;
//val1=undefined ?? 10;
val1= null ?? 3 ?? 20;
console.log(val1);

// Terniary Operator
// condition ? true : false
const ice_tea_price=100;
ice_tea_price>=80 ? console.log("greater than 80") : console.log("less than 80")