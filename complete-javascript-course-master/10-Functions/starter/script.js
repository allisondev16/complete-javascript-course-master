'use strict';

// const addTax = (rate, value) => value + value * rate;

const addTax = function(rate) {
    return function addTax(value){
        console.log("rate: ", rate);
        return value + value * rate;
    }
} 
const addVAT = addTax(0.23)

console.log(addVAT(100));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     registerNewAnswer: function () {

//     }
// }


let test = new Array(26)
console.log("test", test)



function solution(A, B) {
  // Implement your solution here

  let count = 0;
  let strLength = A.length;
  let letters = new Map();

  let numOfCharacterToBeChecked = 1;
  let startIndex = 0;
  while(numOfCharacterToBeChecked <= strLength) {
      let lastIndex = startIndex + numOfCharacterToBeChecked;
      //First get the characters in Map for the noOfLtters to be checked
      for(let i = startIndex; i < lastIndex; i++) {
      letters.set(A.charAt(i), (letters.get(A.charAt(i)) || 0) + 1);
      }
      //compare the second string and increase count if matched
      for(let i = startIndex; i < lastIndex; i++) {
          if(letters.has(B.charAt(i))) {
              let letterCount = letters.get(B.charAt(i));
              if(letterCount > 1) {
                  letters.set(B.charAt(i), letters.get(B.charAt(i)) - 1);
              } else {
                  letters.delete(B.charAt(i));
              }
          } else {
              break;
          }
      }
      if(letters.size === 0) {
          count++;
      }
      letters.clear();
      //Check till last index
      if(lastIndex < strLength) {
          startIndex++;
      } else {
          //Once last index is reached increase noOfLetter to be checked and reset startIndex
          numOfCharacterToBeChecked++;
          startIndex = 0;
      }  
  }

  return count
}

console.log("solution", solution('ZZXYOz', 'OOYXZZ'))

// #1
// function solution(S) {
//   var occurrences = new Array(26);
//   for (var i = 0; i < occurrences.length; i++) {
//       occurrences[i] = 0;
//   }

//   for (var id in S) {
//       occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
//   }

//   var best_char = 'a';
//   var best_res  = occurrences[0];

//   for (var i = 1; i < 26; i++) {
//       if (occurrences[i] > best_res) {
//           best_char = String.fromCharCode('a'.charCodeAt(0) + i);
//           best_res  = occurrences[i];
//       } else if (occurrences[i] == best_res){if ('a'.charCodeAt(0) + i < best_char.charCodeAt(0)){
//               best_char = occurrences[i]}}
//   }

//   return best_char;
// }

// #2
// function solution(A) {
//   var N = A.length;
//   var result = 0;
//   var i, j;

//   var indices = new Map();

//   for (i = 0; i < N; i++) {
//     if (indices.has(A[i])) {
//         j = indices.get(A[i]);
//         result = Math.max(result, Math.abs(i - j));
//     } else {
//       indices.set(A[i], i);
//     }
//   }

//   return result;
// }

// #3
// function solution(A, D) {
//   // Implement your solution here
  
//   // Add values of array A
//   let sumA = 0
//   for (let element of A){
//       sumA = sumA + element
//   }

//   // Compute the occurrence of 3 payments a month on array D
//   let countByMonth = [];
//   let paymentByMonth = new Array(12)
//   for (var i = 0; i < paymentByMonth.length; i++) {
//     paymentByMonth[i] = 0;
//   }

//   for (let i = 0; i < D.length; i++){
//       let dateObj = new Date(D[i]);
//       let month = dateObj.getMonth();
//       if (A[i] != 0){
//         if (countByMonth[month]) {
//             countByMonth[month]++;
//             if (A[i] < 0){
//                 paymentByMonth[month] = paymentByMonth[month] + A[i]
//             } 
//         } else {
//             countByMonth[month] = 1;
//             if (A[i] < 0){
//                 paymentByMonth[month] = paymentByMonth[month] + A[i]
//             }
//         }
//       }
//   }

//   let fee = 12*5
//   for (let i = 0; i < countByMonth.length; i++){
//       if (countByMonth[i] >= 3 && paymentByMonth[i] <= -100){
//           fee = fee - 5
//       }
//   }

//   // Total
//   return sumA - fee
// }

// #5
// function solution(A, B) {
//   // Implement your solution here

//   let count = 0;
//   let strLength = A.length;
//   let letters = new Map();

//   let numOfCharacterToBeChecked = 1;
//   let startIndex = 0;
//   while(numOfCharacterToBeChecked <= strLength) {
//       let lastIndex = startIndex + numOfCharacterToBeChecked;
//       //First get the characters in Map for the noOfLtters to be checked
//       for(let i = startIndex; i < lastIndex; i++) {
//       letters.set(A.charAt(i), (letters.get(A.charAt(i)) || 0) + 1);
//       }
//       //compare the second string and increase count if matched
//       for(let i = startIndex; i < lastIndex; i++) {
//           if(letters.has(B.charAt(i))) {
//               let letterCount = letters.get(B.charAt(i));
//               if(letterCount > 1) {
//                   letters.set(B.charAt(i), letters.get(B.charAt(i)) - 1);
//               } else {
//                   letters.delete(B.charAt(i));
//               }
//           } else {
//               break;
//           }
//       }
//       if(letters.size === 0) {
//           count++;
//       }
//       letters.clear();
//       //Check till last index
//       if(lastIndex < strLength) {
//           startIndex++;
//       } else {
//           //Once last index is reached increase noOfLetter to be checked and reset startIndex
//           numOfCharacterToBeChecked++;
//           startIndex = 0;
//       }  
//   }

//   return count
// }

// #4
// function solution(A) {
//   // Implement your solution here
  
//   let totalPeriods = 0;
//   const particlesSize = A.length;

//   for (let i = 0; i < particlesSize; i++) {
//       for (let count = 0; i + 2 < particlesSize && A[i + 1] - A[i] === A[i + 2] - A[i + 1]; i++) {
//           count++;
//           totalPeriods += count;
//       }
//   }
  
//   return totalPeriods < 1000000000 ? totalPeriods : -1;
// }