// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"



// function swapCase(str) {
//     //1. use split method
//     let letters = str.split(` `)
//     //2. use LOOP for OF function
//     //4. create an empty array
//     let newArray = []
//     for (let letter of letters){
//         //3. now check
//         if (letter === letter.toUpperCase()){
//             newArray.push(letter.toLowerCase()){
//                 else{
//                     newArray.push(letter.toUpperCase())
//                 }
//             }
//         }


//     }
//     return newArray.join(``)
// }

// function swapCase(str) {
//     let letters = str.spilt(``)
//     let newArray = []
//     for (letter of letters) {
//         if (letter.match(`A-Z`)){
//             newArray.push(letter.toLowerCase())
//         } else {
//             newArray.push(letter.toUpperCase())
//         }
//     }
//     return newArray.join(``)
// }

// let output =  swapCase(`OmG`)
// console.log(output)

