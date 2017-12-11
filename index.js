/*
 * DES Implementation in JavaScript
 * Efrei Promo 2019 - Majeure Sécurité
 * Novembre 2017
 * BOUQUET Julien <julien.bouquet@efrei.net>
 * MARTIN Alexandre <alexandre.martin@efrei.net>
 */

// Require tables
permutationsTable = require('./tables/permutations')
expansionTable = require('./tables/expansion')
masterKey = require('./tables/masterKey')
// Require functions
permutations = require('./lib/permutations')

// Variables
var subKeys

message = [1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1]

console.log("DES NodeJS Implementation...\n")
console .log("Original message :")
permutations.displayArray(message)
console.log("Original master key :")
permutations.displayArray(masterKey)

console.log("\n===== Initial permutation =====")
message = permutations.permutation(message, permutationsTable.initPerm)
console.log("New message :")
permutations.displayArray(message)

console.log("\n===== Split in two blocks =====")
message = permutations.splitMessage(message)
console.log("First block :")
permutations.displayArray(message[0])
console.log("Second block :")
permutations.displayArray(message[1])

console.log("\n==== Rounds (x16) =====")
subKeys = permutations.generateSubKey(masterKey, permutationsTable.pc1left.concat(permutationsTable.pc1right), permutationsTable.keyShift, permutationsTable.pc2)
for(var i = 0; i < 16; i++) {
  console.log("---- Round " + (i + 1) + " ----")
  console.log("Used subkey : ")
  permutations.displayArray(subKeys[i])
  message[1] = permutations.permutation(message[1], expansionTable, false)
  console.log("Extanded Right Block :")
  permutations.displayArray(message[1])
  message[1] = permutations.arrayXOR(message[1], subKeys[i])
  console.log("Right block after XOR :")
  permutations.displayArray(message[1])
  message[1] = permutations.computeSBoxs(message[1], permutationsTable.sBoxes)
  console.log("Right block after sBoxes :")
  permutations.displayArray(message[1])
  message[1] = permutations.permutation(message[1], permutationsTable.permut32)
  console.log("Right block after permutation :")
  permutations.displayArray(message[1])
  tmp = message[0]
  message[0] = permutations.arrayXOR(message[1], message[0])
  message[1] = tmp
  console.log("First block after XOR :")
  permutations.displayArray(message[0])
  console.log("Second block after XOR :")
  permutations.displayArray(message[1])
}

console.log("\n==== Final permutation ====")
message = message[0].concat(message[1])
console.log("Stick left and righ :")
permutations.displayArray(message)
message = permutations.permutation(message, permutationsTable.reversePerm)
console.log("Message after permutation :")
permutations.displayArray(message)
