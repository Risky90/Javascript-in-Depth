// Strings litrals (primitive)
let name = "Ashan";
let repoCount = 12;
// console.log(name + repoCount + "something");// little outdated syntax;
console.log(`Hello my name is ${name} and my reopsiteries is ${repoCount}`)// modern syntax (used nowadays), it also known as string interpolation


// Another Method (Stirngs Object(non-primitive)) [disadvantage execution speed is low as compare to stirng literal]

const myname = new String('Ashan');
// console.log(myname)// returen object(every character is key value pair) [try on browser console]
// console.log(typeof myname);// object 
// console.log(myname.length); // 5

// console.log(myname[0]) // A
// console.log(myname[1]) // s
// console.log(myname.__proto__) // to access the portotype

// accessing some properties of the above object;
// console.log(myname.toLowerCase);// show :[Function: toLowerCase]
// console.log(myname.toLowerCase());// show :ashan 
// console.log(myname.toUpperCase());// show :Ashan 
// console.log(myname.charAt(2));// show :h =>character at position 2
// console.log(myname.indexOf('h'));// show :2 =>position of h 
// console.log(myname.charCodeAt('0'));// 65 => utf-16(same to ascii) vlaue at given index
// let str2 = "khan"
// console.log(myname.concat(str2));// to contatinate two or more strings
// console.log(myname.endsWith('a'));// determine weather a string end with a specific character or not
// console.log(myname.endsWith('han',));// it may be a search stiring
// console.log(myname.substring(0 , 4));// return the vlaues from intex 0 to index 3 => Asha
// console.log(myname.slice(2));// the first 2 indexes will be cut off form the string =>han
// console.log(myname.slice(1, 3));// return the vlues at index 1 and 2 => sh

// let str3 = "        ashan          ";
// console.log(str3)
// console.log(str3.trim()); // remove the white spaces
// console.log(str3.trimStart()); // remove the white spaces form start only
// console.log(str3.trimEnd()); // remove the white spaces form end only

// let url = 'https://github.com/Risky90'
// console.log(url.replace('Risky90', 'Risky90/Javascript-in-Depth'))// to replace some characters in string 
// console.log(url.includes('Risky90'))// return boolean vlaue true or false