// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const philippines = describeCountry("Philippines", 109.6, "Manila");
const japan = describeCountry("Japan", 125.8, "Tokyo");
const korea = describeCountry("South Korea", 51.78, "Seoul");

console.log(philippines);
console.log(japan);
console.log(korea);