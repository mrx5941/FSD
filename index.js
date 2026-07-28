// console.log("Hello, World!");

// function sum (p,t){
//     return p+t;
// }
// function sqrt (a){
//     return a*a;
// }
// x=console.log(sqrt(5));
// y=console.log(sqrt(3));
// console.log(sum(x, y));

//iife
// (()=>{
//     console.log("heyyy ..... using")
// })();


// var a=23;
// if(a<20){
//     var a=40;
//     console.log("inside if block ="+a);
// }
// console.log("value of a outside block"+a)


//callabck
// function sum(a,b){
//     return a+b;
// }
// function msgwithsum(clbk,msg){
//     const result= clbk(5,6);
//     console.log("hii  "+msg+" "+result);
// }
// msgwithsum(sum,"rahul")



// function login(error,msg){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(msg);
//     }
// }
// function loginhanler(clbk,username,password){
//     if(username=="admin" && password=="5941"){
//         clbk(null,"login success");
//     }
//     else{
//         clbk("login failed",null);
//     }
// }
// loginhanler(login,"admin","591");