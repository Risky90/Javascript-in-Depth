let score = 26;
// console.log(typeof(score)) // number

//  score = '26';
// console.log(typeof score) // string

// let valueInNumber= Number(score) // conversion into number
// console.log(typeof valueInNumber) // number

// score = '26abc';
// valueInNumber = Number(score); // conversion into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN (not a number)

// score = null;
// valueInNumber = Number(score); // conversion into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // 0

// score = undefined
// valueInNumber = Number(score); // conversion into number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN

// value             type            value-after-conversion
// "33"              number                  33
// "33abc"           number                  NaN
// true              number                  1
// false             number                  0
// null              number                  0
// undefined         number                  NaN


// when string is not empty
let str = 'Ashan';
// let valueInBoolean = Boolean(str);
// console.log(typeof valueInBoolean); // boolean
// console.log(valueInBoolean); // true

// when string is empty
//  str = '';
// let valueInBoolean = Boolean(str);
// console.log(typeof valueInBoolean); // boolean
// console.log(valueInBoolean); // false



// when string is not empty
let num = 2;
let valueInString = String(num);
console.log(typeof valueInString); // string
console.log(valueInString); // 2


