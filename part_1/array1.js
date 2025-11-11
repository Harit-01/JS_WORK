const arr1=[1,2,3,4];
console.log(arr1);

const arr2=[1,"harit",[1,2,3],true];
console.log(arr2);
console.log(arr2[1]);

arr2.push(5);
console.log(arr2);

arr2.pop();
console.log(arr2);

console.log(arr2.indexOf(1));
console.log(arr2.indexOf(11));

console.log(arr2.includes(1));
console.log(arr2.includes([1,2]));

// shift , unshift

console.log(arr2.unshift(9)); //insert element at starting of array and return length of array
console.log(arr2);

console.log(arr2.shift()); //removes the first element of array and return that element
console.log(arr2);


//slice , splice

const arr3=[1,2,3,4];
console.log("A",arr3);
console.log(arr3.slice(1,3)); //slice do not consider last index element, do not modify original array
console.log("B",arr3);
console.log(arr3.splice(1,3)); //splice consider last index element, modify original array
console.log("C",arr3);
