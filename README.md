# Project: Array and User Information Manipulation

## Student ID: 11183433

## Overview

This project contains JavaScript functions to manipulate arrays and create user profiles. The project is divided into three main tasks:

1. **Task 1: processArray Function**
2. **Task 2: formatArrayStrings Function**
3. **Task 3: createUserProfiles Function**

## Task 1: processArray Function

**File:** `arrayManipulation.js`

**Function:** `processArray`

**Description:**
This function takes an array of numbers as an argument and returns a new array where:

- Each even number is squared.
- Each odd number is tripled.

**Usage Example:**

```javascript
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]
```

## Task 2: formatArrayStrings Function

File: arrayManipulation.js

Function: formatArrayStrings

Description:
This function takes two arrays as arguments:

An array of strings.
An array of numbers processed by processArray.
The function modifies each string based on its corresponding number:

Capitalizes the entire string if the number is even.
Converts the string to lowercase if the number is odd.
//example
const stringArray = ["Hello", "World", "JavaScript", "Is", "Awesome"];
const processedNumbers = processArray([1, 2, 3, 4, 5]);
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "awesome"]

## Task 3: createUserProfiles Function

File: userInfo.js

Function: createUserProfiles

Description:
This function takes two arrays as arguments:

An array of original names.
An array of modified names.
The function returns an array of objects, each containing:

originalName: The original name.
modifiedName: The modified name.
id: An auto-incremented identifier starting from 1.
**Usage Example**:

```javascript
const originalNames = ["Alice", "Bob", "Charlie", "Dana", "Eve"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "dana", "EVE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//  { id: 1, originalName: 'Ebenezer', modifiedName: 'EBENEZER' },
//   { id: 2, originalName: 'Amoah', modifiedName: 'amoah' },
//   { id: 3, originalName: 'Kwame', modifiedName: 'KWAME' },
//   { id: 4, originalName: 'Mfensi', modifiedName: 'mfensi' },
//   { id: 5, originalName: 'Junior', modifiedName: 'JUNIOR' }
```
