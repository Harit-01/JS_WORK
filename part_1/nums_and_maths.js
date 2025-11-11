const score=400;
console.log(score);

const balance=new  Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber=123.8966;
console.log(othernumber.toPrecision(5));

const num=100000;
console.log(num.toLocaleString("en-IN"));

// *********************** Maths *************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.2));
console.log(Math.round(4.3));
console.log(Math.min(1,3,5,0));
console.log(Math.max(3,5,2,1));

console.log(Math.floor(Math.random()*10) +1);
console.log((Math.random()*10) +1);

const min=30;
const max=40;
console.log(Math.floor((Math.random()*(max-min+1)))+min);