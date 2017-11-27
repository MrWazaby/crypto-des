/*
* Petmutations functions
*/

module.exports = {
  // Function to premute message
  permutation (message, perm, keepData = true) {
    var permutedMessage

    if(keepData) permutedMessage = message
    else permutedMessage = []

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

    return key
  },
  // Rounds 1 to 16
  rounds (masterKey, permut, keyShift, pc2) {
    var tmpKey
    var subkeys = []

    for(var i = 0; i < keyShift.length; i++) {
      tmpKey = permutations.permutation(masterKey, permut, false)
      tmpKey = permutations.splitMessage(tmpKey)
      tmpKey[0] = permutations.shiftKey(tmpKey[0], keyShift[i])
      tmpKey[1] = permutations.shiftKey(tmpKey[1], keyShift[i])
      subkeys[i] = tmpKey[0].concat(tmpKey[1])
      subkeys[i] = permutations.permutation(subkeys[i], pc2, false)
    }

    return subkeys
  }
}
