// Assignment 1: Console Order Confusion

// Objective: Predict and then verify the console output order.




console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");





// 1.Predict the output order before running.
//Answer: The output will be A 
// D 
// C 
// B
// 2.Explain why that order happens.
//This is because first synchronous tasks  run first followed by asynchronous(first microtask then macrotask), printing B(setTimeout) is macrotask and printing C(promise) is microtask
// 3.Modify the code so that "B" prints before "C" without removing the Promise.
// Modified code: 
console.log("A");

Promise.resolve().then(() => console.log("B"));

Promise.resolve().then(() => console.log("C"));

console.log("D");







// Assignment 2: Async Function Trap

// Objective: Understand the difference between returning a value and a promise.

async function getData() {
  return "Hello";
}

const data = getData();
console.log(data);

// just for your knowledege
//Answer: Given code prints "Hello" as the output





// Assignment 3: Console Order Confusion

// Predict the Output Order

console.log("1: Start");

setTimeout(() => {
  console.log("2: Timeout with 0ms delay");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise resolved");
});

console.log("4: End");





// synchronous:line 65,73-so these will be executed first and then promise(microtask) and in end setTimeout(macrotask)
//Output->
// 1: Start
// 4: End
// 3: Promise resolved
// 2: Timeout with 0ms delay



// Assignment 4: 
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");

// understand why "B" always appears before "A" and "C".


// B always appears before A and C because B is promise(microtask) while A and C are setTimeout(macrotasks, which run after microtasks)





// Assignment 5: Which func will run and why

const a = [1, 2, 3];

function func(n) {
  return n * 2;
}

const result = nums.map(func);

function func(n) {
  return n * 3;
}

console.log(result);




// lower func will run because it was declared last



// Assignment 6: Predict what will be the ans :)

function process(fn, arr) {
  return arr.map(fn);
}

function multi(n, i) {
  return n * i;
}

const m = [2, 4, 6];
const ans = process(multi, m);
console.log(ans);

//Answer: [1, 4, 12], because i=[0,1,2](indexes) for m = [2,4,6], so on multiplying we get desired output.