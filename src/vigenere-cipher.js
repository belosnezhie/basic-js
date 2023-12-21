const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  isDirect;

  constructor(isDirect) {
    if (isDirect === undefined) {
      this.isDirect = true;
    }
    this.isDirect = isDirect
  }

  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error("Incorrect arguments!");
    }

    const mapArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

    const messageArr = message.toUpperCase().split("");

    key = key.toUpperCase();

    const originalIndexes = messageArr.map((currentValue) => {
      if (mapArray.includes(currentValue)) {
        return mapArray.indexOf(currentValue);
      } else {
        return currentValue;
      }
    })

    let i = 0;
    const keyIndexes = originalIndexes.map((currentValue, index) => {
      if (typeof currentValue === "number") {
        let result = mapArray.indexOf(key[i % key.length]);
        i++;
        return result;
      } else {
        return " ";
      }
    })

    const encryptIndexes = originalIndexes.map((currentValue, index) => {
      if (typeof currentValue === "number") {
        return (currentValue + keyIndexes[index]) % mapArray.length;
      } else {
        return currentValue;
      }
    })

    const encryptedMessageArr = encryptIndexes.map((currentValue, index) => {
      if (typeof currentValue === "number") {
        return mapArray[currentValue];
      } else {
        return currentValue;
      }
    })

    return encryptedMessageArr.join("");

  }

  decrypt(/* encryptedMessage, key */) {
    // if (arguments.length < 2) {
    //   throw new Error("Incorrect arguments!");
    // }


    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }
}

module.exports = {
  VigenereCipheringMachine
};
