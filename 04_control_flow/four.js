const coding =['javascript', 'c++', 'c', 'python', 'java', 'ruby', 'golang']

// coding.forEach( function(value){
//     console.log(value)
// })

// // arrow function
// coding.forEach( (value)=>{
//     console.log(value)
// })

// function printMe(item){
//     console.log(item)
// }
// // coding.forEach(printMe()) // execute the fuction here (this will cause error) 
// coding.forEach(printMe) // giving the refrence of the functoin (this is correct)

// total three arguments of forEach loop

// coding.forEach(( item, index, array)=>{
//     // item: value at each index
//     // index: point to indexes of the array
//     // array : array string 
//     console.log(`This is item ${item} here ${index} is its index`)
//     console.log(`This will print array string at each iteration ${array}`)
// })

let myCodeing = [
    {
        languageName: 'Javascript',
        languageExtention: '.js'
    },
    {
        languageName: 'C++',
        languageExtention: '.cpp'
    },
    {
        languageName: 'Python',
        languageExtention: '.py'
    },
    {
        languageName: 'html',
        languageExtention: '.html'
    }
]

myCodeing.forEach((item, intex, vlaue)=>{
    // // console.log(vlaue)// at each iteration it will print all object present in the array
    // console.log(item)// print one object as one item
    // console.log(intex) // the index of each in array
    // console.log(item.languageName) // only language names
    // console.log(item.languageExtention); // only language extensions
    // console.log(item[languageName]) // (error) the keys also must be wraped in double or single qoutes

})