//array
// in Js array are not primitive datatypes but instead arrays are objects
// => Js arrays are resizable
// => can be of mix datatypes
 let myArr = [0, 1, 2, 3, 4, true, 'ashan', {name:'Ashan'}]; // every element of an array can be a number , an object, a string or a boolean
// console.log(myArr)
// //second method of decleration
// let myArr2 = new Array(1,3,4,5)
// console.log(myArr2)

// Array methods
// myArr.push(3) // push new element at the end of the array
// myArr.push(7) 
// myArr.pop()// remove the last value from array


// // unshift load the machine as by shifting all the elements of the array (prefer not to use in large arrays)
// myArr.unshift(0); // add element to the start of the array
// myArr.unshift(5);
// myArr.shift();// remove 1 element form the start of the array
 console.log(myArr)

// console.log(myArr.includes(9)) //false (9 not includes in the array)

// console.log(myArr.indexOf(4));//4
// console.log(myArr.indexOf(6)) // -1(means this element is not present in the array)

// let arr2 = myArr.join() // adds all elements of the array into a string sepereted by comma(,)
// console.log(typeof arr2) // string
// console.log(arr2)

// slice , splice

//slice (copy of array manipulated)
console.log(myArr.slice(1,4))// return a copy of the section of an array (1,2,3 (return form index 1 to index 3))
console.log("A: Orignal array after slice() ", myArr)

//splice (orignal array manipulated)
console.log(myArr.splice(1,4))//[1,2,3,4]
console.log('B : Orignal array after splice()', myArr) // 