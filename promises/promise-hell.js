let { hailRide, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with some pretty gnarly Promise semantics.');

goOutForTacos();

function goOutForTacos () {
  return hailRide().then(rideTo => {
    return rideTo('the taco place').then(() => {
      return waitInLine().then(() => {
        return orderTacos().then(amount => {
          return pay(amount).then(orderNumber => {
            return waitForTacos(orderNumber).then(tacos => {
              console.log(`😋🍴 ${tacos}.`)
            });
          });
        });
      });
    });
  }).catch(giveUp);
}
