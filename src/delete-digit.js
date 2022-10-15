const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString().split("");
  const arr = str.map((item) => Number(item));
  return arr.filter((i) => i > Math.min(i)).join("");
}

module.exports = {
  deleteDigit,
};
