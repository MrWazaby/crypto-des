/*
 * Tool to generate a random key
 * Efrei Promo 2019 - Majeure Sécurité
 * Novembre 2017
 * BOUQUET Julien <julien.bouquet@efrei.net>
 * MARTIN Alexandre <alexandre.martin@efrei.net>
 */

// Generate a random key 
var key = "";

for(var i = 0; i < 8; i++) {
  var total = 0

  for(var j = 0; j < 7; j++) {
    var value = Math.floor((Math.random() * 10) % 2)
    key += value + ', '
    total += value
  }

  key += 1 - (total % 2)
  if(i !== 7) key += ', '
  key += '\n'
  if(i !== 7) key += '\t'
}

console.log('[\n\t' + key + ']')
