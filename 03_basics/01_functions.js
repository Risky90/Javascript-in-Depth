
// function myName(){
// console.log('A')
// console.log('s')
// console.log('h')
// console.log('a')
// console.log('n')
// }
// myName()

// function Sum(num1, num2){ //(num1, num2) perameters
    
//      console.log(num1+num2)
//      return num1+num2
//      console.log('code after retrun') // nothing will execute in function after return
// }

// // Sum(3, 4) // 7 //(3, 4) arguments
// // Sum(3, "4") // 34
// // Sum(3, "a") // 3a

// const result = Sum(3, 5)
// console.log(result) // show result if sum is returned in function


// function loginUserMessage(username){
//     if(!username){
//         console.log("Username not found")
//         return
//     }else{
//         return `Welcome back ${username} `
//     }
// }
//  console.log(loginUserMessage()) // Welcome back undefined 
// console.log(loginUserMessage('Ashan'))// Welcome back Ashan 

// // function calculateCartPrice(...num){// rest operator
// function calculateCartPrice(val1, val2, ...num){// rest operator
//     // let sum =0;
//     // for(let i=0; i< num.length; i++ ){
//     //        sum = sum +  num[i]
//     //    }
//     // return sum
//     return num // return [300, 400]  the first two values gose in val1 and val2
// }
// console.log(calculateCartPrice(20, 200 ,300 , 400))


let user = {
    username : 'ashan',
    price : 100
}

function handleObject(anyobj){

    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}  `)
    // if in case it not find anyobj.username , it will show undefined
}
handleObject(user)

const myArr = [23, 34, 55, 34]

function arrHandle(getArray){
    
        return getArray[1];  // to return the second element 

}

console.log(arrHandle(myArr))