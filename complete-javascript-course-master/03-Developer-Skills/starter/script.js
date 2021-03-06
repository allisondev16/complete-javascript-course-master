// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const xyz = 1;

const calcAge = birthYear => 2022 - birthYear;

console.log();

// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK �

// print every element of the array
// number of days per element
// print together

// const printForecast = arr => {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(`... ${arr[i]}° in ${i + 1} days `);
//     newArray.push(`... ${arr[i]}° in ${i + 1} days `);
//   }
//   console.log(newArray.join(''));
// };

// other solution

const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
