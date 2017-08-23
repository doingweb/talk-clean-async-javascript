let { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with callbacks, hold the extra indentation.');

goOutForTacos();

function goOutForTacos () {
  hailRide(rideArrived);

  function rideArrived (err) {
    if (err) { giveUp(err); return; }
    driveToTacoPlace(rideComplete);
  }

  function rideComplete (err) {
    if (err) { giveUp(err); return; }
    waitInLine(readyToOrder);
  }

  function readyToOrder (err) {
    if (err) { giveUp(err); return; }
    orderTacos(payForTacos);
  }

  function payForTacos (err) {
    if (err) { giveUp(err); return; }
    pay(paymentComplete);
  }

  function paymentComplete (err) {
    if (err) { giveUp(err); return; }
    waitForTacos(tacosAreDone);
  }

  function tacosAreDone (err, tacos) {
    if (err) { giveUp(err); return; }
    console.log(`😋🍴 ${tacos}.`);
  }
}

