/*
 * Tool to generate a random key
 * Efrei Promo 2019 - Majeure Sécurité
 * Novembre 2017
 * BOUQUET Julien <julien.bouquet@efrei.net>
 * MARTIN Alexandre <alexandre.martin@efrei.net>
 */

var value = 0;

for(var i = 0; i < 64; i++) {
  value += Math.floor((Math.random() * 10) % 2)
  if (i !== 63) value += ', '
}

console.log('[' + value + ']')
