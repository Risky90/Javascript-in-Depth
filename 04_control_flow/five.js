const coding =['javascript', 'c++', 'c', 'python', 'java', 'ruby', 'golang']

// let values= coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(values) // it return undefined
// console.log(typeof values) // undefined

//// forEach loop dosen't return any vlaue
// let values= coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(values) // it return undefined
// console.log(typeof values) // undefined

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // // let Num = myNums.filter((nums, index, array) => nums >4)
// //             // // or
// let Num = myNums.filter((nums, index, array)=>{
//       return  nums > 4
// })

// console.log(Num)  // [ 5, 6, 7, 8, 9, 10 ]

// // or it can be done with forEach
// Num = [];

// myNums.forEach((num)=>{
//     if(num > 4){
//         Num.push(num)
//     }
// })
// console.log(Num)  // [ 5, 6, 7, 8, 9, 10 ]
// console.log(typeof Num) // object

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbook = books.filter((bk) => bk.genre === 'Science')
//   console.log(userbook)

   userbook = books.filter((bk) =>{
    return bk.publish >= 1995 && bk.genre === 'Science'
   })
  console.log(userbook)