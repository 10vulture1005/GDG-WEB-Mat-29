// Assignment 

// question 1) predict output of this code snippet

var x = 10;

function test() {
  console.log(x);
  var x = 20;
  console.log(x);
}

test();
console.log(x);

// question 2) predict output of this code snippet

let x = 5;

function outer() {
  console.log("1:", x);
  var x = 10;

  function inner() {
    console.log("2:", x);
  }
  inner();
}

outer();
console.log("3:", x);

// question 3) predict output 

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
console.log(typeof (() => {}));


