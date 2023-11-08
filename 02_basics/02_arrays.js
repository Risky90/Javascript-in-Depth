const fruit =['apple', 'mango', 'banana', 'graps', true]
const arr2 = ['elem1', 'elem2', 'elem3']
// Mehtods of combining two or more arrays 
 // (method 1)
// fruit.push(arr2)
// console.log(fruit) // come array inside the array (consider the pushing element as a single element)
// console.log(fruit[5]) 

// alternative (mathod 2)
// let a= fruit.concat(arr2)
// // console.log(fruit) // it will not work(because this method return a new array which you have to store in a variable)
// console.log(a); // the elements of the second array is concat as elements
// //console.log(fruit.concat(arr2)) // the elements of the second array is concat as elements

// alternative (method 3) (spread operator[...])

// let b = [...fruit, ...arr2] // it spread the array
// console.log(b)


// const myArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const myArr2 =  myArr.flat()//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// // // const myArr2 =  myArr.flat(1) // depth 1 (default)
// // // const myArr2 =  myArr.flat(2) // depht 2
// // // const myArr2 =  myArr.flat(Infinity) // up to infinite depth
// console.log(myArr2)


// consversion to array(important by web-scraping point of view)
// => to cheak its array or not
console.log(Array.isArray('Ashan')) // false (its string)
console.log(Array.isArray(fruit)) // true
console.log(Array.from('Ashan')) // Creates an array from an iterable object.[ 'A', 's', 'h', 'a', 'n' ]
let myobj ={
    name : 'ashan',
    dob: '2,11,2004',
    fName: 'khan'
}
console.log(Array.from(myobj))// return empty array (interesting)(will discuss it leter)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) //Returns a new array from a set of elements.