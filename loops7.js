const arr=[1,2,3,4,5,6,7,8];
const newarr=arr.map((val)=>{return val+10});
console.log(newarr);

const ans1=arr.map((val)=>(val+10)).map((val)=>(val*1)).filter((val)=>(val>14));
console.log(ans1);