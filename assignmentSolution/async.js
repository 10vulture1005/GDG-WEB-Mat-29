//Virottam Dutt Raturi
//LIT2025017

//Assignment 1: Console order

//Predicted output:
//
// A
// D
// C
// B
//
// Reason: First Nodejs will execute console.log("A") and console.log("D")
// as first the execution will happen from sync call stack
// the setTimeout and promise will go to callback queue/microtask queue
// and thus they will be executed once the call stack becomes empty
//
// after A and D, C will be printed as the promise will be resolved first.
// Reason: microtask queue has higher priority than callback queue;
// Finally B will be printed
//
// In order to print B before C,

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => setTimeout(() =>console.log("C")));
//adding a new setTimeout inside the promise to delay printing C
console.log("D");



//Assignment 2
//
//-----------


//Assignment 3
//
//Predicted Output:
//1: Start
//4: End
//3: Promise Resolved
//2: Timeout with 0ms delay
//
//Reason: Start and End are printed first
//as they are part of synchronous call stack;
//
//Then promise is resolved before setTimeout 
//as microtask queue has higher priority than setTimeout callback queue;
//Finally Timeout statement is printed


//Assignment 4
//A and C are printed with Timeouts of 0ms
//which will be executed after an immediately resolved promise
//since promises have higher priority;


//Assignment 5
//The func(n) that is defined at the end will run
//as the function will be redefined
//
//in js the functions are hoisted
//so all functions are defined at the start of execution
//so the 2nd definition will overwrite the original defn;

//Assignment 6
//array [2,4,6] will be passed into process
//it will return (m.map(multi))
// in map(fn), the callback fn is called with arguments as : (element, index)
// so n will get value of elements and i will hold their index
// and it will return n*i for each index
// so it will return element * index for every element
// so finally it will return [2*0,4*1,6*2]
// so output: [0,4,12];

