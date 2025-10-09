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
// answer of question 1
/* undefined
   20
   10 */

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
// answer of question 2 
/* 1: undefined
   2:10
   3:5*/

// question 3) predict output 

console.log(typeof null);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
console.log(typeof (() => {}));

// answer to question 3
/* object
   nahi ata sorry
   undefined
   object
   object
   boolean */


