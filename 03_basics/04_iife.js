// Immediately Invoked Function Expression

// function Chai(){
//     console.log("DB Connected")
// }
// Chai()

// // IIFE
// (function Chai(){
    // // named iffe (Chai)
//     console.log("DB Connected")
// })()


// If you want to invoked second function you have to writ a ; after frist function othrewise it will cause error

// (function Chai(){
//     console.log("DB Connected")
// })()
// // will cause error
// (function Chai(){
//     console.log("DB Connected")
// })()


// (function Chai(){
//     console.log("DB Connected")
// })();
// // will not not cause error as ; is present 
// (function Chai(){
//     console.log("DB Connected")
// })()

// Arrow function also work as iife
// 
// ( () =>{
//     console.log("DB Connected")
// })()


( (name) =>{
    console.log(`My Name is ${name}`)
})("Ashan")
