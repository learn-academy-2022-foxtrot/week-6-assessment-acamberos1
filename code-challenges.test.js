// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest




// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
//  describe("wordMix", () =>{
//   it("takes string from array and outputs desired sentence", () =>{
// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// // // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
// expect(wordMix(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
// })
// })
//expected output will be people being processed by wordMix and give out desired statements
// b) Create the function that makes the test pass.
// function wordMix has array as param
// when returned it will be iterated with map and also be split so the first and last name can be capitilized
// it will then be rejoined with occupation to print out fully as the desired output
// charat(0) helps capitilize the start of each word in name
// + and the string interpolation joins them
// const wordMix =(arr) => {
//   return arr.map(arr => arr.name.split(" ")
//   .map(name => name.charAt(0).toUpperCase() + name.slice(1))
//   .join(" ") +
//   ` is ${arr.occupation}.`

 
//   )
// }
// console.log(wordMix(people)) this was to check before the test

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// describe is not defined
describe("remainder", () => {
  it("returns only remainder of numbers divided by three", () => {
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]

const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])

})
})
// b) Create the function that makes the test pass.
// function will only interact with the integers and return the remainder after it divides the integers by 3
// it will ignore the strings, i plan to iterate using map method
// can i put if value % 3 = int
// return 
// it will divide array values by 3 then filter out strings and only show numbers
// const remainder = (arr) => {
// arr.map((value) => value % 3)
// const onlyNumbers = arr.filter(
//   element => typeof element === 'number'
// );
// return arr
//}
 const remainder = arr.map ((value) => value % 3)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("numCubed", () => {
  it("takes array of numbers and returns sum of numbers cubed", () =>  {
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
expect(numCubed(cubeAndSum1)).toEqual(99)
expect(numCubed(cubeAndSum2)).toEqual(1125)

})
})
// b) Create the function that makes the test pass.
const numCubed = (arr) => {
  return arr.map((value => value ** 4))
  
}