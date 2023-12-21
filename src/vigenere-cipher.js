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

  encrypt(/* message, key */) {
  //   if (arguments.length < 2) {
  //     throw new Error("Incorrect arguments!");
  //   }

  //   const mapArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  //   // const decodeArray = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

  //   const messageInUppercase = message.toUppercase();

  //   const messageIndexes = [];


  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

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
