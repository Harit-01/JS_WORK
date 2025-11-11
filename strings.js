const name="harit";
const repocount=3;

// console.log(name+ repocount+ " value");
console.log(`hello i am ${name} and my repo count is ${repocount}.`);
const gamename=new String('harit-ha-com');

// console.log(gamename[0]);
// console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("h"));

const newstr=gamename.substring(0,4);
console.log(newstr);

const anotherstr=gamename.substr(-8,4);
console.log(anotherstr);

const new1="   harit   ";
console.log(new1);
console.log(new1.trim());

const url="https:/harit.com/harit%10adesara";
console.log(url.replace("%10","-"));
console.log(url.includes("harit"));
console.log(gamename.split("-"));