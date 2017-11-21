/*
 * Petmutations functions
 */

 module.exports = {
   initialPermutation (message, initPerm) {
      permutedMessage = []

      for(var i = 0; i < 64; i++) {
         permutedMessage[i] = message[initPerm[i] - 1]
      }

      return permutedMessage
   }
 }
