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

message = [
  1, 0, 0, 1, 1, 0, 1, 0,
  0, 0, 1, 1, 0, 1, 0, 1,
  1, 1, 1, 0, 1, 0, 0, 1,
  0, 1, 1, 1, 1, 0, 1, 0,
  1, 0, 0, 0, 0, 1, 1, 1,
  1, 0, 0, 1, 1, 1, 0, 0,
  0, 0, 1, 1, 0, 0, 1, 1,
  1, 1, 1, 1, 0, 1, 0, 0
]

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
}

/*
// Step 1
message = permutations.permutation(message, permutationsTable.initPerm)
message = permutations.splitMessage(message)

// Step 2
message[1] = permutations.permutation(message[1], expansionTable)
subKeys = permutations.rounds(masterKey, permutationsTable.pc1left.concat(permutationsTable.pc1right), permutationsTable.keyShift, permutationsTable.pc2)


console.log(subKeys)

// console.log(masterKey) */
