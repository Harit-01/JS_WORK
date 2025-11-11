const myarr=[1,2,3,4,5];
const total=myarr.reduce((acc,curval)=>(acc+curval),0);   // here acc intial value we write at the end of function which is zero here 
console.log(total);                                       // and it will update to acc+curval(current value in array)
                                                          // this is how reduce work
                                                          
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];
const result=shoppingCart.reduce((acc,curval)=>(acc+curval.price),0);
console.log(result);