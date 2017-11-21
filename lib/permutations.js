/*
 * Petmutations functions
 */

module.exports = {
   // Function to premute message
   permutation (message, perm) {
      permutedMessage = message

      for(var i = 0; i < perm.length; i++) {
         permutedMessage[i] = message[perm[i] - 1]
      }

      return permutedMessage
   },
   // Function to splice message
   splitMessage (message) {
      splitedMessage = []

      splitedMessage[0] = message.slice(0, message.length/2)
      splitedMessage[1] = message.slice(message.length/2)

      return splitedMessage
   },
   // Function to shift keys
   shiftKey (key, shiftValue) {
      var end;

      for(var i = 0; i < shiftValue; i++) {
         end = key.shift()
         key = key.concat(end)
      }

      console.log(key)

      return key
   },
   // Rounds 1 to 16
   rounds (masterKey, permut, keyShift) {
      for(var i = 0; i < keyShift.length; i++) {
         masterKey = permutations.permutation(masterKey, permut)
         masterKey = permutations.splitMessage(masterKey)
         masterKey[0] = permutations.shiftKey(masterKey[0], keyShift[i])
         masterKey[1] = permutations.shiftKey(masterKey[1], keyShift[i])
         masterKey = masterKey[0].concat(masterKey[1])
      }

      return masterKey
   }
}
