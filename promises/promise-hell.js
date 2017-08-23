let { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with some pretty gnarly Promise semantics.');

goOutForTacos();

function goOutForTacos () {
  return hailRide().then(() => {
    return driveToTacoPlace().then(() => {
      return waitInLine().then(() => {
        return orderTacos().then(() => {
          return pay().then(() => {
            return waitForTacos().then(tacos => {
              console.log(`😋🍴 ${tacos}.`)
            });
          });
        });
      });
    });
  }).catch(giveUp);
}
