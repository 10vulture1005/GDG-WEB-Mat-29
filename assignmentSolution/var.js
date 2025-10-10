//Virottam Dutt Raturi
//LIT2025017

//Question 1
//
//var variables are hoisted in js so the declaration is moved to the top
//however the value assignment stays at the same place
//so the first console.log within test() will print "undefined"
//second console.log will print 20
//the final console.log will print the x declared outside the fn
//so it will print 10
//
//output: 
//undefined
//20
//10

//Question 2
//the var definition will be hoisted to the top of the function
//the first console.log in outer() will print undefined
//after that x will be assigned value 10
//then inner() will be called which will output 10
//finally the final console.log will output 5 again
//since we are out of the function scope
//
//output:
//1: undefined
//2: 10
//3: 5

//Question 3
//Output:
//object (null is object)
//number (NaN has type Number)
//undefined (undefined as type undefined)
//object (array is an object)
//object (object is an object)
//function (functions are function objects)

