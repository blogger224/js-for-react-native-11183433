// userInfo.js

/**
 * Function to create user profiles.
 * Takes an array of names and an array of modified names,
 * and returns an array of objects with originalName, modifiedName, and an auto-incremented id.
 * @param {string[]} names - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} An array of user profile objects.
 */
function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
      return {
          id: index + 1,
          originalName: name,
          modifiedName: modifiedNames[index]
      };
  });
}

// Example usage:
const originalNames = ["Ebenezer", "Amoah", "Kwame", "Mfensi", "Junior"];
const modifiedNames = ["EBENEZER", "amaoh", "KWAME", "mfensi", "JUNIOR"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: 'Ebenezer', modifiedName: 'EBENEZER' },
//   { id: 2, originalName: 'Amoah', modifiedName: 'amoah' },
//   { id: 3, originalName: 'Kwame', modifiedName: 'KWAME' },
//   { id: 4, originalName: 'Mfensi', modifiedName: 'mfensi' },
//   { id: 5, originalName: 'Junior', modifiedName: 'JUNIOR' }
// ]

// Export the function for use in other modules (if using Node.js or similar environments)
module.exports = { createUserProfiles };
