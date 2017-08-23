let { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with some nice Promise semantics.');

goOutForTacos();

function goOutForTacos () {
  return hailRide()
    .then(driveToTacoPlace)
    .then(waitInLine)
    .then(orderTacos)
    .then(pay)
    .then(waitForTacos)
    .then(tacos => console.log(`😋🍴 ${tacos}.`))
    .catch(giveUp);
}
