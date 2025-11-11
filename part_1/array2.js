const arr1=["thor","ironman","spiderman"];
const arr2=["superman","flash","batman"];

// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[3][0]);

const arr3=arr1.concat(arr2);
console.log(arr3);

const newarr3=[...arr1,...arr2];
console.log(newarr3);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const new_another_array=another_array.flat(Infinity);
console.log(new_another_array);

console.log(Array.isArray("harit"));
console.log(Array.from("harit"));
console.log(Array.from({name:"harit"})); // interesting


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
console.log(Array.of(1,2,3,4,"harit","adesara"));
