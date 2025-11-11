// for in
const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming=["js","rb","py","java","cpp"];
for(const key in programming){
    console.log(programming[key]);  //here in (forin) we get index
}

// const map=new Map();
// map.set('IN',"India");
// map.set("USA","United States of America");
// map.set("Fr","France");
// map.set("IN","india");         // will not get error but also not work

// for (const key in map) {
//     console.log(key);
// }