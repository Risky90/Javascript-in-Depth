// if

 const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`Power is : ${power}`)// no error will ouccr
// }

// if(score > 100){
//     const power = "fly"
   
// }
// console.log(`Power is : ${power}`)// scope error (power is not defined)

// short hand notation
    // if(score > 100) console.log("your score is grater then 100")


// truthy and fulsey vlaues
    let userEmail = 'd@gmail.com';
     userEmail = ''

    // if(userEmail){
    //     console.log('User email found')
    // }else{
    //     console.log('User email not found')
    // }

// falsy vlaues
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// ture, 'false', '0', " ", [], {}, function(){}

// // array cheking
// userEmail = []
// if(userEmail.length === 0){
//     console.log('condition is ture , array is empty')
// }else{
//     console.log('condition is false, array is not empty')
// }

// // object cheking 
// userEmail = {}
// if(Object.keys(userEmail).length === 0){
//     console.log('condition is ture , array is empty')
// }else{
//     console.log('condition is false, array is not empty')
// }

// Nullish coalescing operator (??) : null , undefined
// let val1;
// val1 = 3 ?? 6; // 3 will print
// console.log('first value is not null nor undefined ' + val1)
// val1 = null ?? 6; // 6 will print if first value is null
// console.log('first vlaue is null ' +  val1)
// val1 = undefined ?? 6; // 6 will print if first value is undefined
// console.log('first value is undefined ' + val1)


// Tirnary operator
//  condition ? ture : false

let teaPrice = 100;
teaPrice >= 70 ? console.log('The tea is costly') : console.log('the tea is cheap')
 teaPrice = 50;
teaPrice >= 70 ? console.log('The tea is costly') : console.log('the tea is cheap')