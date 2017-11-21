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
   },
   splitMessage (message) {
      splitedMessage = []
      splitedMessage[0] = []
      splitedMessage[1] = []

      splitedMessage[0] = message.slice(0, 32)
      splitedMessage[1] = message.slice(32)

      return splitedMessage
   }
 }
