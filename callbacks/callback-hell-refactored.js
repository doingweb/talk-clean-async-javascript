let { hailRide, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with callbacks, hold the extra indentation.');

goOutForTacos();

function goOutForTacos () {
  hailRide(rideArrived);

  function rideArrived (err, rideTo) {
    if (err) { giveUp(err); return; }
    rideTo('the taco place', rideComplete);
  }

  function rideComplete (err) {
    if (err) { giveUp(err); return; }
    waitInLine(readyToOrder);
  }

  function readyToOrder (err) {
    if (err) { giveUp(err); return; }
    orderTacos(payForTacos);
  }

  function payForTacos (err, costOfTacos) {
    if (err) { giveUp(err); return; }
    pay(costOfTacos, paymentComplete);
  }

  function paymentComplete (err, orderNumber) {
    if (err) { giveUp(err); return; }
    waitForTacos(orderNumber, tacosAreDone);
  }

  function tacosAreDone (err, tacos) {
    if (err) { giveUp(err); return; }
    console.log(`😋🍴 ${tacos}.`);
  }
}

