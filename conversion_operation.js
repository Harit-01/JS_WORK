let score="harit";

// console.log(typeof(score));
// console.log(typeof score);  //both are same

let valuenumber=Number(score);
console.log(typeof(valuenumber));
console.log(valuenumber);

// "33"=>33
// "33abc"=>NaN
// true=>1 , false=>0

let isloggedin="harit";
let booleanloggedin=Boolean(isloggedin);
console.log(booleanloggedin);

// "harit"=>true
// ""=>false

let somenumber=18
let stringnumber=String(somenumber);
console.log(stringnumber);
console.log(typeof(stringnumber));



// ************************* Operations ****************************

let value=3;
let negval=-value
console.log(negval);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(3/2);
// console.log(2%3);

let str1="harit";
let str2=" adesara";
let str3=str1+str2;
// console.log(str3);

// console.log(1+"2");
// console.log("2"+1);
// console.log("1"+2+2);
// console.log(1+"2"+"2");  //all are same

// console.log(+true);
// console.log(+"");

let num1,num2,num3;
num1=num2=num3=2+2; //bad practice

let gamecounter=100;
++gamecounter;
console.log(gamecounter);