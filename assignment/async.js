// Assignment 1: Console Order Confusion

// Objective: Predict and then verify the console output order.

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");





// 1.Predict the output order before running.

// 2.Explain why that order happens.

// 3.Modify the code so that "B" prints before "C" without removing the Promise.



// -------------------------------------------------------------------------------------------------------------




// Assignment 2: Async Function Trap

// Objective: Understand the difference between returning a value and a promise.

async function getData() {
  return "Hello";
}

const data = getData();
console.log(data);

// just for your knowledege



// -------------------------------------------------------------------------------------------------------------




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





// -------------------------------------------------------------------------------------------------------------



// Assignment 4: 
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");

// understand why "B" always appears before "A" and "C".


// -------------------------------------------------------------------------------------------------------------





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




// -------------------------------------------------------------------------------------------------------------
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
