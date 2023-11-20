// const promiseOne = new Promise((resolve, reject)=>{

//     setTimeout( ()=>{
//         console.log("Ashan Khan")
//         resolve()
//     }, 1500 )

// })

// promiseOne.then(()=>{
//     console.log("Promice Consumet")
// })


// new Promise((resolve, reject)=>{
   
//    let error = ture
//     setTimeout( ()=>{
//         console.log("Ashan Khan")
//         resolve()
//     }, 1500 )

// }).then(()=>{
//     console.log("Promice Consumed")
// }).catch(()=>{
//     console.log('Something went Wrong')
// })


// const promiseThree = new Promise((resolve, reject)=>{
   
//     setTimeout( ()=>{
//         console.log("Ashan Khan")
//         resolve({username : 'Ashan' , email : 'khan.ashan.khan1234$@gmail.com'})
//     }, 1500 )

// })

// promiseThree.then((user)=>{
//     // console.log(user.username) // take complete user object
//     // console.log(user.username) // take only username
//     console.log("Promice Consumed")
// }).catch(()=>{
//     console.log('Something went Wrong')
// })


// const promiseFour = new Promise((resolve, reject)=>{
   
//     setTimeout( ()=>{
//         // let error = true
//         let error = true
//         if(!error){

//             resolve({username : 'Ashan' , email : 'khan.ashan.khan1234$@gmail.com'})
//         }else{
//             reject('There is something went wrong')
//         }
//     }, 1500 )

// })

// promiseFour
// .then((user)=>{
//      console.log(user) // take complete user object
//     // console.log(user.username) // take only username
//         return user.username;
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log('The Promise is either resolve or rejected .finally() will execute in both cases'))


// const promiseFive = new Promise((resolve, reject)=>{
   
//     setTimeout( ()=>{
//         let error = true
//         let error = false // if this is flase then catch() dosen't required
//         if(!error){

//             resolve({username : 'Ashan' , email : 'khan.ashan.khan1234$@gmail.com'})
//         }else{
//             reject(' JS went wrong')
//         }
//     }, 1500 )

// })

// async function consumePormiseFive(){

//     const resopnse = await promiseFive;
//     console.log(resopnse)
    
// }
// consumePormiseFive();
// // Note => In the above method the error dosen't handeled automatically but you have to use try() and catch() must , let see below.

// const promiseFive = new Promise((resolve, reject)=>{
   
//     setTimeout( ()=>{
//         let error = true
//         // let error = false // if this is flase then catch() dosen't required
//         if(!error){

//             resolve({username : 'Ashan' , email : 'khan.ashan.khan1234$@gmail.com'})
//         }else{
//             reject(' JS went wrong')
//         }
//     }, 1500 )

// })

// async function consumePormiseFive(){
//     try {
//         const resopnse = await promiseFive;
//         console.log(resopnse)
        
//     } catch (error) {
//         console.log(error)
//     }
   
// }
// consumePormiseFive();

// async function  getUsers(){
//     try {
//         let data = await fetch('https://randomuser.me/api/')
        
//         const resopnse = await data.json() // it also take time you have to await it.
//         console.log(resopnse)
//     } catch (error) {
//         console.log('E :', error)
//     }
   
// }
// getUsers()
// //  let try the above with .then and .catch method

fetch('https://randomuser.me/api/')  // it return a promise (its response type is promise)
.then((resolve)=>{
    return resolve.json()
    console.log(resolve.json())

})
.then((data)=>{console.log(data)})
.catch((reject)=>{
    console.log(reject)
})
