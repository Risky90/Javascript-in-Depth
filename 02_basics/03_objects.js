/*
The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
*/
// singulten
// when we declear an literal in singulte not create , when we declear object as constructor then singulten create
// Object.create (constructor method (singulten))
// (singulten will discuss leter)

// object literals (object decleration method)

const sym = Symbol('key1')
const jsUser ={
    name: "Ashan",
    "fullName": "Ashan Khan", // cannot access with (.) 
    age: 19,
    // sym: 'my key',   // will not treat as symbol, treat as string 
    [sym] : 'mykey2',// will treat as symbol
    location: 'Pakistan',
    email: 'ashankhan1234@gmail.com',
    isLogedIn: false,
    lastLogin: ['monday', 'sunday']
}
//Access
// console.log(jsUser.name)
// console.log(jsUser[name])// will cause error because it treat it as string
// console.log(jsUser["name"])
// console.log(jsUser["fullName" ])
// console.log(jsUser.sym)
// console.log(typeof jsUser.sym) //string (it is treated as string)
console.log(jsUser[sym])

// change data 
// jsUser.location = "Bannu"
// // console.log(jsUser.location)
//         //or
// console.log(jsUser['location'])

// Object.freeze(jsUser) // it will freez and the changes will not porpagate
//  jsUser.location = "Pashwer"; // this changes will not made actullay

//  console.log(jsUser.location) 
//  console.log(jsUser)

//  jsUser.greeting = function(){
//     console.log('Welcome Js User')
//  }
//  console.log(jsUser.greeting) // function will not execute only it referance will return
//  console.log(jsUser.greeting()) // the fucntion greeting will execute

 jsUser.greeting2 = function(){
    console.log(`Welcome ${this.name} to user js object`)
 }
console.log(jsUser.greeting2())