//singleton
//Object.create

const { captureOwnerStack } = require("react");

//object literals

const mysym=Symbol("key1");

const js_user={
    name:"harit",
    "full name":"harit adesara",
    [mysym]:"my_key",
    age:19,
    location:"ahmedabad",
    email:"harit@gmail.com",
    isloggedin:true,
    lastloggeddays:["monday","sunday"]
}

console.log(js_user.email);
console.log(js_user["email"]);
console.log(js_user["full name"]);
// console.log(js_user[full name])  //give error
console.log(js_user[mysym]);
console.log(typeof mysym);

js_user.email="harit@company.com"
console.log(js_user["email"]);
// Object.freeze(js_user);  // freeze object
js_user.email="harit@startup.com";
console.log(js_user["email"]);
console.log(js_user);

js_user.greeting=function(){
    console.log("hello js user");
}
js_user.greetingtwo=function(){
    console.log(`hello js user , ${this.name}`);
}

js_user.greeting();
js_user.greetingtwo();
console.log(js_user);