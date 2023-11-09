
// if(true){
//     let a = 10;
//     const b = 20;
//     var c =30;  
// }
// // console.log(a)
// // console.log(b)
// console.log(c)

// Nested Scope
// function One(){
//     const username = "Ashan";
    
//     function two(){
//         const website = 'youtube';
//         console.log(username)
//     }
//     console.log(website) // it will not work
//     two()
// }
// One()

///
// if(true){
//     const name = "ashan";
//     if(name === 'ashan'){
//         const website = ' youtube';
//         console.log(name + website )
//     }

//     // console.log(website) // will cause errar (website have no scope access)

// }
// console.log(name)// error (name have no scope access here)

//++++++++++++++++++++++++++++++++++++

/* 
// have no error in this block 
function addOne(num){

    return num + 1;
}
addOne(3)

let addTwo = function(num){ // (it is also called expression)
    return num + 2;
}
addTwo(3)
*/


addOne(3) // have no error
function addOne(num){

    return num + 1;
}


addTwo(3) // error (con't access addTwo before intialization)
let addTwo = function(num){ // (it is also called expression)
    return num + 2;
}