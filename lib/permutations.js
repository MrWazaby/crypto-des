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
    return first
  },
  // Convert decimal to binary
  dec2bin (dec) {
    return (dec >>> 0).toString(2);
  },
  // Generate subkeys
  generateSubKey (masterKey, permut, keyShift, pc2) {
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
  },
  // genreate sboxes
  computeSBoxs (block, sBoxs) {
    // Split block in eight
    newBlock = []
    for(var i = 0; i < 8; i++) {
      newBlock[i] = block.splice(0,6)
    }

    // Compute sboxes
    for(var i = 0; i < 8; i++) {
      line = newBlock[i][0] + '' + newBlock[i][5]
      column = newBlock[i][1] + '' + newBlock[i][2] + '' + newBlock[i][3] + '' + newBlock[i][4]
      line = parseInt(line, 2)
      column = parseInt(column, 2)
      index = line * 15 + column
      value = sBoxs[i][index]
      value = this.dec2bin(value)
      newBlock[i] = value.split('')
    }

    for(var i = 1; i < 8; i++) {
      newBlock[0].concat(newBlock[i])
    }

    return newBlock[0]
  },
  // Display arrays
  displayArray (data) {
    var value = '['
    for(var i = 0; i < data.length; i++) {
      value += data[i]
      if (i !== data.length - 1) value += ', '
    }
    value += ']'
    console.log(value)
  }
}
