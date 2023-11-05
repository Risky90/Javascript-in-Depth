"use strict" // treat all js code as newer version of javascript

//alert("Hollo World") // not avaliable in nodejs

let name = "Ashan"; // string datatype
let age = 18;       // number datatype
let isLogedIn= true;// boolean

// number => 2 to power 53
// bigint 
// string => ""
// boolean=> true/false
// null   => standalone value (it is the representation of empty value)
/*
Exapmle:
    You and a request to server to show temprature, if server have some issue to send you temprature and send you 0 then 0 is also a temprature, so in such a case the 'null'(means empty) is used, and it will be prefered for the server to send empty.
*/
// undefined => (the value is not defined yet
// symbol    uese for uniqueness (mostly used is react like libraries)
// object 

// tyoeof operator
    console.log(typeof 'ashan') // string 
    console.log(typeof age)     // number
    console.log(typeof isLogedIn)//boolean
    console.log(typeof null)     //object
    console.log(typeof undefined)//undefined
    console.log(typeof Symbol)   // function (when value is not assigned)
    Symbol = 'a';
    console.log(typeof Symbol) // string (when value is assigned)
    console.log(typeof BigInt) // function(when value is not assigned)
    BigInt = 1;
    console.log(typeof BigInt)// number (when vlaue is assigned)
    console.log(typeof NaN)   // number
   
    