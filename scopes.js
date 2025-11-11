// var does not follow scope resolution while let and const follow this,
// and child scope can use parent scope variables but parent scope can not use child scope variables.

var c=300;
let a=300;
if(true){
    let a=10;
    const b=20;
    console.log("inner: ",a);
}

console.log(a);
// console.log(b); //not declared
console.log(c);


function one(){
    const username="harit"
    function two(){
        const website=" youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}
//one();

if(true){
    const username="harit"
    if(username==="harit"){
        const website=" soni"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

// ********************* Interesting ***********************

console.log(addone(5));
function addone(num){
    return num+1;
}

addtwo(5);
const addtwo=function(num){
    return num+2;
}