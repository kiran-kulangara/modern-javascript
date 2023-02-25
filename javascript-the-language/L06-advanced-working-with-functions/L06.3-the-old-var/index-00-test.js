// For "var", declarations are hoisted, but assignments are not.

function sayHi() {
  phrase = "Hello"; // won't throw error

  console.log(phrase);

  var phrase; 
}
sayHi();


function sayHi() {
  phrase = "Hello"; // will throw error

  console.log(phrase);  

  var phrase;
}
sayHi();


// In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).

(function() {

  var message = "Hello";

  console.log(message); // Hello

})();