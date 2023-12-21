const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== "string") {
    str = String(str);
  }

  // let results = [];
  let currentEl = "";

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }

  if (options.separator === undefined) {
    options.separator = "+";
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.addition !== undefined) {
    currentEl = new String(options.addition);
    currentEl = (currentEl + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + currentEl;
  }

  currentEl = str + currentEl;

  currentEl = (currentEl + options.separator).repeat(options.repeatTimes - 1) + currentEl;

  return currentEl;
}

module.exports = {
  repeater
};
