let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString("en-IN"));
console.log(typeof mydate);

let mycreatedate=new Date(2023,0,23);
console.log(mycreatedate.toLocaleDateString());
mycreatedate=new Date(2023,0,23,5,3);
console.log(mycreatedate.toLocaleDateString());
mycreatedate=new Date("2023-01-14");
console.log(mycreatedate.toLocaleDateString());
mycreatedate=new Date("01-14-2023");
console.log(mycreatedate.toLocaleDateString());
// all are same

let mytimestamp=Date.now();
console.log(mytimestamp); // time gets in milisecond from 1st jan,1970
//console.log(mytimestamp.getTime()); //not working
console.log(Math.floor(Date.now()/1000));

let newdate=new Date();
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDate());
console.log(newdate.getDay());

console.log(`${newdate.getDate()} and the time ${newdate.getTime()}`);

newdate.toLocaleString('default',{
    weekday:"long",
})

console.log(newdate.toLocaleString('default',{
    weekday:"long",
}));