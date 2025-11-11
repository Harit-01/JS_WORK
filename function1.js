function say_my_name(){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("i");
    console.log("t");
}

// say_my_name();

// function addtwonumber(num1,num2){
//     console.log(num1+num2);
// }
// addtwonumber(1,2);

function addtwonumber(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}

const result=addtwonumber(3,5)
console.log(result);

function loginuser(username="harit"){
    if(!username){
        console.log(`please enter a name`);
        return;
    }
    return `${username} just logged in`;
}

console.log(loginuser("harit"));
console.log(loginuser());

function calculatecartprice(val1,val2,...num1){
    return num1;
}
console.log(calculatecartprice(100,200,300));
console.log(calculatecartprice(100,200,300,400,500));

const user={
    username:"crown",
    prices:10000
}

function handleobj(obj){
    console.log(`usename is ${obj.username} and price is ${obj.prices}`);
}

handleobj(user);
handleobj({
    username:"king",
    prices:10000
})

const myarr=[1,2,3,4,5];
function returnsecondvalue(getarray){
    return getarray[1];
}

console.log(returnsecondvalue(myarr));
console.log(returnsecondvalue([100,200,300,400,500]));