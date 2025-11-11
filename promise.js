const promise1=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, Cryptography, Network
    setTimeout(function(){
        console.log("Hello JS User!");
        resolve();
    },1000)
})
promise1.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000);
}).then((function(){
    console.log("Async task 2 resolved");
}))


const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Harit",email:"Harit@gmail.com"});
    },1000);
})
promise3.then(function(user){
    console.log(user);
})


const promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Harit",email:"Harit@gmail.com"})
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})
promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"));


const promise5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"Harit",email:"Harit@gmail.com"})
        }
        else{
            reject('ERROR: Something went wrong');
        }
    })
});
async function p5() {
    try{
        const res=await promise5;
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}
p5();

async function getallusers(){
    try{
        const res=await fetch('https://api.github.com/users/Harit-01');
        const data=await res.json();
        console.log(data);
    }
    catch(error){
        console.log("E: ",error);
    }
}
getallusers();

fetch('https://api.github.com/users/Harit-01').then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error));

//promise.all => this is also available