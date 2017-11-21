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

message = [
  1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,
  9 , 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55, 56,
  57, 58, 59, 60, 61, 62, 63, 64
]

// Step 1
message = permutations.permutation(message, permutationsTable.initPerm)
message = permutations.splitMessage(message)

// Step 2
message[1] = permutations.permutation(message[1], expansionTable)
masterKey = permutations.splitMessage(masterKey)
masterKey[0] = permutations.permutation(masterKey[0], permutationsTable.pc1left)
masterKey[1] = permutations.permutation(masterKey[1], permutationsTable.pc1right)

console.log(masterKey)
