// for

// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     if(i===5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// console.log(element) //will not work because of scope resolution
 
// we can also use nested loops

let myarr=["flash","batman","superman"];
console.log(myarr.length);
for (let i=0;i<myarr.length;i++) {
    const element = myarr[i];
    console.log(element);
    
}

// break and continue

for(let i=0;i<=20;i++){
    if(i==5){
        console.log("5 is detected");
        break;
    }
    console.log(`value of i is ${i}`);
}

for(let i=0;i<=20;i++){
    if(i==5){
        console.log("5 is detected");
        continue;
    }
    console.log(`value of i is ${i}`);
}
