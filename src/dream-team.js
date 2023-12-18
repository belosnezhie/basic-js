const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }

  if (members.length === 0) {
    return false;
  }

  const firstLetters = members.map((currentValue) => {
    if (typeof currentValue === "string") {
      const trimmedCurrentValue = currentValue.trim().toUpperCase();
      return trimmedCurrentValue[0];
    } else {
      return false;
    }
  })

  const filteredFirstLetters = firstLetters.filter((item) => item !== false);

  filteredFirstLetters.sort();

  const result = filteredFirstLetters.join("");

  return result;
}

module.exports = {
  createDreamTeam
};
