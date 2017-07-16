let { hailRide, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with some nice Promise semantics.');

goOutForTacos();

function goOutForTacos () {
  return hailRide()
    .then(rideTo => rideTo('the taco place'))
    .then(waitInLine)
    .then(orderTacos)
    .then(pay)
    .then(waitForTacos)
    .then(tacos => console.log(`😋🍴 ${tacos}.`))
    .catch(giveUp);
}
