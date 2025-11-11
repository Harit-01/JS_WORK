// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIIFE
    console.log("DB Connected");
})(); // semi colon is important in end beacuse it tells where to end context

((name)=>{
    console.log(`DB connected two, ${name}`)
})("harit");   // semi colon is important , generally code editior do that 
               // but some time it does not do that so it is important to add semi colon at the end