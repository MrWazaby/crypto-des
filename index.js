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
arrayOperations = require('./lib/arrayOperations')
boolOperations = require('./lib/boolOperations')
computingDES = require('./lib/computingDES')

// Input message
message = [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]

// Start of the main script
console.log("DES NodeJS Implementation...\n")
console .log("Original message :")
arrayOperations.displayArray(message)
console.log("Original master key :")
arrayOperations.displayArray(masterKey)

console.log("\n===== Initial permutation =====")
message = arrayOperations.permutation(message, permutationsTable.initPerm, false)
console.log("New message :")
arrayOperations.displayArray(message)

console.log("\n===== Split in two blocks =====")
message = arrayOperations.splitMessage(message)
console.log("First block :")
arrayOperations.displayArray(message[0])
console.log("Second block :")
arrayOperations.displayArray(message[1])

console.log("\n==== Rounds (x16) =====")
subKeys = computingDES.generateSubKey(masterKey, permutationsTable.pc1left.concat(permutationsTable.pc1right), permutationsTable.keyShift, permutationsTable.pc2)
for(var i = 0; i < 16; i++) {
  tmp = message[1]
  console.log("---- Round " + (i + 1) + " ----")
  console.log("Used subkey : ")
  arrayOperations.displayArray(subKeys[i])
  message[1] = arrayOperations.permutation(message[1], expansionTable, false)
  console.log("Extanded Right Block :")
  arrayOperations.displayArray(message[1])
  message[1] = boolOperations.arrayXOR(message[1], subKeys[i])
  console.log("Right block after XOR :")
  arrayOperations.displayArray(message[1])
  message[1] = computingDES.computeSBoxs(message[1], permutationsTable.sBoxes)
  console.log("Right block after sBoxes :")
  arrayOperations.displayArray(message[1])
  message[1] = arrayOperations.permutation(message[1], permutationsTable.permut32, false)
  console.log("Right block after permutation :")
  arrayOperations.displayArray(message[1])
  message[1] = boolOperations.arrayXOR(message[1], message[0])
  message[0] = tmp
  console.log("First block after XOR :")
  arrayOperations.displayArray(message[0])
  console.log("Second block after XOR :")
  arrayOperations.displayArray(message[1])
}

console.log("\n==== Final permutation ====")
message = message[1].concat(message[0])
console.log("Stick left and righ :")
arrayOperations.displayArray(message)
message = arrayOperations.permutation(message, permutationsTable.reversePerm, false)
console.log("Message after permutation :")
arrayOperations.displayArray(message)
