// Primitive Datatypes(call my value)
// 7 types:
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt



// Non Primitive Datatype or Referance type
// Types: 
// Arrays
// Objects
// Functions


/*Note=>
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

// Symbols (nuiqueness)

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false
console.log(id) // Symbol(123)
console.log(anotherId) // Symbol(123)
console.log(typeof anotherId) // symbol