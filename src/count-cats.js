const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(cats) {
  return cats.reduce(
    (sum, sub) => sum + sub.reduce(
      (sum, cell) => cell === "^^" ? sum + 1 : sum,
      0),
    0);
}

module.exports = {
  countCats
};
