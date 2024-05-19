// arrayManipulation.js

/**
 * Function to process an array of numbers.
 * Each even number is squared and each odd number is tripled.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} A new array with each even number squared and each odd number tripled.
 */
function processArray(arr) {
    // Use the map function to iterate over the array and apply the transformation
    return arr.map(num => {
        if (num % 2 === 0) {
            // Square the even number
            return num * num;
        } else {
            // Triple the odd number
            return num * 3;
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);

console.log(resultArray); // Output: [3, 4, 9, 16, 15]

// Export the function for use in other modules (if using Node.js or similar environments)
module.exports = { processArray };


//task2
// arrayManipulation.js

/**
 * Function to process an array of numbers.
 * Each even number is squared and each odd number is tripled.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} A new array with each even number squared and each odd number tripled.
 */
function processArray(arr) {
  // Use the map function to iterate over the array and apply the transformation
  return arr.map(num => {
      if (num % 2 === 0) {
          // Square the even number
          return num * num;
      } else {
          // Triple the odd number
          return num * 3;
      }
  });
}

/**
* Function to format an array of strings based on a corresponding array of numbers.
* Capitalize the entire string if the number is even, convert the string to lowercase if the number is odd.
* @param {string[]} strArr - The array of strings to format.
* @param {number[]} numArr - The array of numbers processed by processArray.
* @returns {string[]} A new array of formatted strings.
*/
function formatArrayStrings(strArr, numArr) {
  // Use the map function to iterate over the strings and apply the appropriate transformation
  return strArr.map((str, index) => {
      const num = numArr[index];
      if (num % 2 === 0) {
          // Capitalize the entire string if the number is even
          return str.toUpperCase();
      } else {
          // Convert the string to lowercase if the number is odd
          return str.toLowerCase();
      }
  });
}

// Example usage:
cons= [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);

const stringArray = ["Hello", "World", "JavaScript", "Is", "Awesome"];
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);

console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "awesome"]

// Export the functions for use in other modules (if using Node.js or similar environments)
module.exports = { processArray, formatArrayStrings };

