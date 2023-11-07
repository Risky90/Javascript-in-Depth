
let myDate =  new Date();
// console.log(myDate)

// console.log(myDate.toString())// show some how in readable format(Tue Nov 07 2023 09:39:05 GMT+0500 (Pakistan Standard Time))
// console.log(myDate.toLocaleString()) // show in local format (11/7/2023, 9:39:47 AM)

// console.log(myDate.toDateString()) // show only date (Tue Nov 07 2023)
// console.log(myDate.toLocaleDateString()) // show only date in local format (11/7/2023)

//  console.log(myDate.toTimeString())  // show only time (09:40:53 GMT+0500 (Pakistan Standard Time))
// console.log(myDate.toLocaleTimeString())  // show only time in local format (9:41:58 AM)

// console.log(typeof myDate) // object

// let specifiedDate = new Date(2023, 0, 23); // format 1
// console.log(specifiedDate.toLocaleString())

// let specifiedDate = new Date('2023-04-11'); // format 1
// console.log(specifiedDate.toDateString())

///////////////// Time Stamp ////////////////
// let myTimeStamp = Date.now(); // value in millisecond form 1 junaury 1970 to now 
// console.log(myDate.getTime())// time in millisecond
// console.log(myTimeStamp)

// console.log(`today date ${myDate.getDate()}'`)
// console.log(` today day in week ${myDate.getDay()}`)
// console.log(`This year ${myDate.getFullYear()}`)
// console.log(`This hour in today day ${myDate.getHours()}`)
// console.log(`This hour milliseconde ${myDate.getMilliseconds()}`)
// console.log(`This hour minutes ${myDate.getMinutes()}`)
// console.log(`This hour minutes ${myDate.getMonth() + 1}`) // months start form 0

console.log(myDate.toLocaleString('default',{  // the first perameter is tiemzone which is default 
    weekday : 'long' // tuesday
}))
console.log(myDate.toLocaleString('default',{  // the first perameter is tiemzone which is default 
    weekday : 'narrow' // T
}))
console.log(myDate.toLocaleString('default',{  // the first perameter is tiemzone which is default 
    weekday : 'short' // Tue
}))