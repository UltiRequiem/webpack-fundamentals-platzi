/**
 * Sum Numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const sum = (a, b) => a + b;

/**
 * Multiply all numbers in an array
 *
 * @param {Array.<number>} arr
 * @returns {number}
 */
const multiply = (arr) => arr.reduce((acum, num) => acum * num);

export { sum, multiply };
