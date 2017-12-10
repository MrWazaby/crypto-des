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
  // XOR two bits arrays
  arrayXOR (first, second) {
    for(var i = 0; i < first.length; i++) {
      first[i] = first[i] ^ second[i]
    }
  }
}
