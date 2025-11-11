const accountid=1237684;
var email="harit@gmail.com";
let password=123456;
city="japiur"; //prefer not to use this format
let state;

//accountid=30202   //not allowed

email="virta@gmail.com";
password=2332333;
city="goa";

console.log(accountid);

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountid,email,password,city,state]);