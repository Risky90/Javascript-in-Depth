// const score = 234;
// const balance = new Number(34)
// console.log(balance) // [Number: 34]

// console.log(balance.toString())// the properties of string also comes to it 
// console.log(balance.toFixed(2))// 34.00 (add two precision value)


// console.log(Math)
// console.log(Math.abs(-5)) //5 (taking ablalute of the vlaue)
// console.log(Math.round(4.2))// 4 (round off of the vlaue)
// console.log(Math.round(4.6))// 5 (round off of the vlaue)
// // you can choose that top or down vlaue of round off number by the following two methods
// console.log(Math.ceil(7.2)) // 8 (choose the top vlaue of round off)
// console.log(Math.floor(7.9)) // 7 (choose the down vlaue of round off)
// console.log(Math.sqrt(25)); //5

// console.log(Math.min(2, 4, 3, 3, 4, 7)) // find the minimum vlaue in the array
// console.log(Math.max(5,5,2,6,7)) // find the maximum vlaue in the array

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.random()*6)

// console.log( Math.ceil( Math.random()*6)) // for lodo

// We have to find the vlaues between 10 and 20
const min = 10
const max = 20

console.log(Math.ceil(Math.random() * (max-min)) + min)
