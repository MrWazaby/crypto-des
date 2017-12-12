/*
* Petmutations functions
*/

module.exports = {
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
  }
}
