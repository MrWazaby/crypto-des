/*
 * Petmutations functions
 */

module.exports = {
   // Function to premute message
   permutation (message, perm) {
      permutedMessage = []

      for(var i = 0; i < perm.length; i++) {
         permutedMessage[i] = message[perm[i] - 1]
      }

      return permutedMessage
   },
   // Function to splice message
   splitMessage (message) {
      splitedMessage = []

      splitedMessage[0] = message.slice(0, 32)
      splitedMessage[1] = message.slice(32)

      return splitedMessage
   }
}
