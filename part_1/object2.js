// const tinder=new Object();  //singelton object
const tinder={};

tinder.id="137";
tinder.name="harit";
tinder.isloggedin=false;

console.log(tinder);

const regularuser={
    email:"harit@gmail.com",
    fullname:{
        userfullname:{
            firstname:"harit",
            lastname:"adesara"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={5:"a",6:"b"};

// const obj4={obj1,obj2};
//const obj4=Object.assign({},obj1,obj2,obj3);  // object.assign(target,source)
const obj4={...obj1,...obj2,...obj3};
console.log(obj4);

const user=[
    {
        id:1,
        email:"harit@gmail.com"
    },
    {
        id:1,
        email:"harit@gmail.com"
    },
    {
        id:1,
        email:"harit@gmail.com"
    }
]

console.log(user[1].email);


console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
console.log(tinder.hasOwnProperty("isloggedin"));

const course={
    coursename:"js",
    price:1000,
    teacher:"hitesh sir" 
}

const {teacher:t}=course; //
// console.log(teacher);
console.log(t);

