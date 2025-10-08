// Javascipt basics class 1
// var let const
// var a; // declaration
// a=100; // initialization
// console.log(a);
// var a=100; // can redeclare and reinitialize 
// a=200;
// console.log(a);

// let b =100;
// b = 500;
// console.log(b);
// let b =120; cannot redeclare let, we can reinitialize

// const c=1000;
// c=200;
// console.log(c); cannot redeclare and reinitialize

// var-> function/global scoped
// let-> block scoped
//const-> block scoped
// var result;
// function math(a,b){
//     if(a>=b){
//         result=a+b;
//         console.log(result);
//     }
//     else{
//         result=a-b;
//         console.log(result);
//     }
    
// }
// math(5,10);
// math(10,5);
// console.log(a);
// var a= 300;
// var a; // var-> var is hoisted and its value is set to undefined
// a=300;
// console.log(a);
// let a;

// console.log(a); // temporal dead zone

//hoisting-> in js all declarations are done first

// console.log(typeof 0);
// console.log(typeof "0");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);

// type coersion

// console.log(typeof(10 + "2"));
// console.log(typeof(10-"2"));

// console.log(0==="0");// strict-> value and datatype
// console.log(0=="0"); // loose-> checks only value

// falsy-> false, 0, "", null, undefined
// truthy-> everything other than falsy ("0")

// if("0"){
// console.log("i am truthy");
// }

//operators: 1)arithmetic operators (+,-,*,/,%, **)
console.log(2**3);
//2) logical operators-> &&, || ,!
// 3) assignment operator =, +=, -=

var a=10;
a+=2;
console.log(a);
//4) comparision operator ==, ===, >=,!=,!==




