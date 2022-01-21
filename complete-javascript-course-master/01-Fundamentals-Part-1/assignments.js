// JavaScript Fundamentals – Part 1
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = "Philippines"
const continent = "Asia"
let population = 109.6

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
const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const calculateBMI = (mass, height) => {
    return mass / height ** 2
}

const markBMI = calculateBMI(massMark, heightMark)
const johnBMI = calculateBMI(massJohn, heightJohn)
const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI, markHigherBMI);

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const markBMI2 = calculateBMI(95, 1.88)
const johnBMI2 = calculateBMI(85, 1.76)

const markHigherBMI2 = markBMI2 > johnBMI2

console.log(markBMI2, johnBMI2, markHigherBMI2);


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