// Singulten
// const discordUser = new Object();
const discordUser = {}
discordUser.id = '123abc';
discordUser.name = 'ashan';
discordUser.isLogedIn = false
// console.log(discordUser)

// const discordUser2 ={

//     email: 'khan.ashan.khan1234@gmail.com',
//     fullname:{
//         userFullName :{
//             firstName:'Ashan',
//             lastName : 'Khan'
//         }
//     }
// }
// console.log(discordUser2.fullname.userFullName.firstName)
// Optional Chaning

// joining tow objects
let obj1 ={
    1: 'a',
    2: 'b'
}
let obj2 ={
    3: 'c',
    4: 'd'
}
// let obj3 = {obj1, obj2}// method 1

// method 2
// const obj3 = Object.assign({},obj1, obj2)// {}(optional) is consider as source and 'obj1','obj2' is consider as source (optimized way)
// console.log(obj3)

// method 3 (spread operator)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// From databese mostly comae the array of objects
// const users =[
//     {
//         id: 1,
//         email: 's@gmail.com'
//     },
//     {
//         id: 2,
//         email: 'g@gmail.com'
//     },
//     {
//         id: 3,
//         email: 'g@gmail.com'
//     } 
// ]

// console.log(users[1])// access full object at index 1  
// console.log(users[1].email) // access only email at index 1  
// console.log(users[1].id)  // access id(key) of the object at index 1 

// To access the keys of the object 
console.log(discordUser)
console.log(Object.keys(discordUser)) // will return the arrays of keys of the object
// To access the values of the object 
console.log(Object.values(discordUser)) // will return the arrays of values of the object

console.log(Object.entries(discordUser))// Returns an array of key/values of the enumerable properties of an objec

console.log(discordUser.hasOwnProperty('name'))// is exist the name property in the object