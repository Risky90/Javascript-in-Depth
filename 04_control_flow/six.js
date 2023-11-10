// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let num = myNums.map((vlaue, index, array) =>{
//     return vlaue + 10
// })
// console.log(num)

// // chaining 
// let Num1 = myNums
//                 .map((num) => num * 10)
//                 .map((num)=> num + 1)
//                 .filter((num) => num  >= 40)

// console.log(Num1)


// Reduce method
const Num = [1, 2, 3];
 
// const myTotal = Num.reduce(function(acc, curval){
//     console.log(`accumulator ${acc}, current value is ${curval}`)
//     return acc + curval
// }, 3)

// const myTotal = Num.reduce((acc, curval) => acc + curval, 0)
// console.log(myTotal)

 const shopingCart = [
    {
        itemName : 'Js Course',
        price : 2999
    },
    {
        itemName : 'Mobile Dev',
        price : 5999
    },
    {
        itemName : 'Data Science course',
        price : 8999
    },
    {
        itemName: 'Python',
        price : 999
    }
 ]

 let priceToPay = shopingCart.reduce( (acc, item )=> (acc + item.price), 0 )
 console.log(priceToPay)