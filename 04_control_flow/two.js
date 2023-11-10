// for of loop

// arr = ["", "", "", "",] // array of stirng
// arr2 = [{}, {}, {}, {}] // array of object

//// Syntax
// for (const iterator of object) {
    
// }

// // array 
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num)
// }
// // string 
// const greeting = 'Hello Ashan';
// for (const greet of greeting) {
//     console.log(greet)
// }

// const map1 = new Map();
// map1.set('a', 'apple');
// map1.set('b', 'ball');
// map1.set('c', 'cat');
// console.log(map1)
// // for (const key of map1) { // this print key and value both
// //     console.log(key)
// // }

// // if you want to print key and vlaue saperate
// for (const [keys , values] of map1) {
//     console.log(`This is key  ${keys}`)
//     console.log(`This is value  ${values}`)
    
// }

// for of loop on object 
const obj = {
    name :"Ashan",
    email : 'khan.ashan.khan@gmail.com',
    github: 'https://github.com/Risky90'
}

for (const iterator of obj) { // error obj is not iterable
    console.log(iterator);

}