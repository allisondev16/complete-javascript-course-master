// JavaScript Fundamentals – Part 1
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = "Philippines"
const continent = "Asia"
let population = 13

console.log(country)
console.log(continent)
console.log(population)

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country.The variable should hold a Boolean value.Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = true
//const language
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
//console.log(typeof language);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some 
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never 
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

const language = 'Filipino'


//language = 'English'


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76

const calculateBMI = (mass, height) => {
    return mass / height ** 2
}

const markBMI = calculateBMI(massMark, heightMark)
const johnBMI = calculateBMI(massJohn, heightJohn)
const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI, markHigherBMI);


// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
console.log(population / 2);
// 2. Increase the population of your country by 1 and log the result to the console
population++
console.log(population);
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
console.log(population > 6);
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?
console.log(population < 33);
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese'
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);



// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

// I already did.


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} below average`);
}

let value = 1
console.log('value', value++);

