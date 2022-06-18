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

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const chinaPercentage = percentageOfWorld1(1441);
const philippinesPercentage = percentageOfWorld1(109.6);
const koreaPercentage = percentageOfWorld1(51.8);

console.log(chinaPercentage, philippinesPercentage, koreaPercentage);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const chinaPercentage2 = percentageOfWorld2(1441);
const philippinesPercentage2 = percentageOfWorld2(109.6);
const koreaPercentage2 = percentageOfWorld2(51.8);

console.log(chinaPercentage2, philippinesPercentage2, koreaPercentage2);

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called 
// 'percentageOfWorld3'

const percentageOfWorld3 = population => population / 7900 * 100;

const chinaPercentage3 = percentageOfWorld3(1441);
const philippinesPercentage3 = percentageOfWorld3(109.6);
const koreaPercentage3 = percentageOfWorld3(51.8);

console.log(chinaPercentage3, philippinesPercentage3, koreaPercentage3);

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("Philippines", 109.6));
console.log(describePopulation("South Korea", 51.78));

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK 

// 1.

const calcAvarage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

// 2.
// Data 1:
let avgDolphins = calcAvarage(44, 23, 71);
let avgKoalas = calcAvarage(65, 54, 49);

// 3.

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log("No team wins");
    }
}

// 4.

checkWinner(avgDolphins, avgKoalas);

// Data 2:
avgDolphins = calcAvarage(85, 54, 41);
avgKoalas = calcAvarage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values

// 1.
const populations = [1441, 109.6, 51.78, 125.8];

// 2.
console.log(populations.length === 4);
// true

// 3.
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);


// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your 
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from 
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the 
// index of the country in the 'neighbours' array, and then use that index to 
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// 1.
const neighbours = ["Singapore", "Taiwan", "Malaysia"];
console.log(neighbours);

// 2.
neighbours.push("Utopia");
console.log(neighbours);

// 3.
neighbours.pop();
console.log(neighbours);

// // 4.
if (!neighbours.includes("Germany")) {
    console.log('Probably not a central European country :D');
}

// // 5.
const index = neighbours.indexOf("Singapore");

neighbours[index] = "SG"

console.log(neighbours);


// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// 1.

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * .15
//     } else {
//         return bill * .2
//     }
// }

// Shorter solution:
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// 2. 
const bills = [125, 555, 44];

// 3.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 4.
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing 
// properties 'country', 'capital', 'language', 'population' and 
// 'neighbours' (an array like we used in previous assignments)

const myCountry = {
    country: "Philippines",
    capital: "Manila",
    language: "Filipino",
    population: 109.6,
    neighbors: neighbours
}

// Dot vs. Bracket Notation
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the 
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then 
// decrease it by two million using brackets notation.

// 1.
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// 2.
myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);

///////////////////////////////////////
// Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }
}
console.log(jonas.getSummary());
