const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = "";
    }
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    let index = position - 1;
    if (typeof position !== "number" ||
        Number.isInteger(position) === false ||
        this.chainArr[index] === undefined) {
          this.chainArr = [];
          throw new Error("You can't remove incorrect link!");
        }
    this.chainArr.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainArr.join("~~");
    this.chainArr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
