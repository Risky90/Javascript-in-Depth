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

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId); // false
// console.log(id) // Symbol(123)
// console.log(anotherId) // Symbol(123)
// console.log(typeof anotherId) // symbol

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Memory in Javascript
// Two types of memory is used in Javascript
// 1 Stack (for primitive datatypes)
// 2 Heap (for non-primitive datatypes (referance type))


// // Use of Stack
// let myname = "ashan";
// let nickname = myname;
// // console.log(nickname)// ashan
// nickname = "khan"
// console.log(nickname) // khan  (change)
// console.log(myname)   // ashan (not change)
// // The changes not ouccer in both variable, because the data is copied in stack(primitive datatypes)


// Use of Heap
// let mydata ={
//     name: 'Ashan',
//     email: 'khan.ashan.khan@gmail.com'
// }
// let mydata2 = mydata;
// // console.log(mydata2) //{ name: 'Ashan', email: 'khan.ashan.khan@gmail.com' }
// mydata2.name = 'Ashan Khan';
// console.log(mydata2) // { name: 'Ashan Khan', email: 'khan.ashan.khan@gmail.com' } (changed)
// console.log(mydata) // { name: 'Ashan Khan', email: 'khan.ashan.khan@gmail.com' } (also changed)
// //In both veriable the data is change because the referance(store in heap :- as it is non-primitive datatype) of the data is going in intialization .