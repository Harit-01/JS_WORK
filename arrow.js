const user={
    username:"king",
    price:10000,
    welcomemsg:function(){
        console.log(`${this.username} , welcome js user`);
        console.log(this);
    }
}

user.welcomemsg();
user.username="om";
user.welcomemsg();

console.log(this);

// function chai(){
//     let username="harit";
//     console.log(this.username);    //this can be only use with object , not with function 
// }
// chai();

// const chai=function (){
//     let username="harit";
//     console.log(this);    
// }
// chai();

const chai= () => {
    let username="harit";
    console.log(this);
}
chai();


// const addtwo=(num1,num2) => {
//     return num1+num2;
// }
//const addtwo=(num1,num2) => num1 + num2
const addtwo =(num1,num2) => (num1 + num2)
//const addtwo=(num1,num2) => ({username:"harit"})
console.log(addtwo(3,4));