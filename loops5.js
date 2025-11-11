const coding=["js","py","cpp","c"];
coding.forEach(function(val){
    console.log(val);
})
console.log(coding.forEach);

coding.forEach((item)=>{
    console.log(item);
})

function printme(item){
    console.log(item);
}
coding.forEach(printme);

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding=[
    {
        languagename:"js",
        filename:"js"
    },
    {
        languagename:"python",
        filename:"py"
    },
    {
        languagename:"c++",
        filename:"cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
})