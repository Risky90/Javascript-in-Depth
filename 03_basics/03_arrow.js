
// const user ={
//     username : 'Ashan',
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`Welcome to Website ${this.username}`)
//         // (this) keyword refer to the current context (in his own scope)
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// // user.username = 'gull khan'
// // user.welcomeMessage()
// // => to what (this) will be refer here in this globle scope 

// // console.log(this) // show {} (current context is empty in node enviroment, but in browser it is a window object)


// Arraw functions 

// function Chai(){
//     let username= 'Ashan'
//     // console.log(this) // it will show globle object 
//     console.log(this.username) // undefined([this] context only work in object not in function)
// }
// Chai()

// // Also not work in below syntax
// const Chai  = function(){
//     let username= 'Ashan'
//     // console.log(this) // it will show globle object 
//     console.log(this.username) // undefined([this] context only work in object not in 
// }
// Chai()



// // 3rd method
// const Chai  = ()=>{ // arrow function
//     let username= 'Ashan'
//     console.log(this) // show empty parinthesis in arrow fucniton
//     // console.log(this.username) // undefined([this] context only work in object not in 
// }
// Chai()

//// Explicit return (explicitally write the return keyword)
// let addTwo = (num1, num2)=>{
//     return num1 +  num2;
// }
// console.log(addTwo(3,6))

// // Implicit return
// let addTwo = (num1, num2)=>  num1 +  num2; // return keyword will also removed
//              or
// let addTwo = (num1, num2)=> (num1 +  num2); 

//// if you have to return object
let addTwo = (num1, num2)=> ({username: 'Ashan'}) // must be wraped in () if you want to return objcet
console.log(addTwo(3,6))  