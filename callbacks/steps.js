const { TIME_BETWEEN_STEPS, TIME_FOR_TACOS, giveUp, getNextOrderNumber } = require('../util');

module.exports = { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos };

function hailRide (rideArrivedCallback) {
  console.log('Hailing a ride.');
  setTimeout(() => {
    console.log('Ride has arrived');
    rideArrivedCallback();
  }, TIME_BETWEEN_STEPS);
}

function driveToTacoPlace (rideCompleteCallback) {
  console.log(`Going to taco place.`);
  setTimeout(() => {
    console.log(`Made it to taco place.`);
    rideCompleteCallback();
  }, TIME_BETWEEN_STEPS);
}

function waitInLine (readyToOrderCallback) {
  console.log('Waiting in line.');
  setTimeout(() => {
    console.log('Finally at the counter, ready to order.');
    readyToOrderCallback();
  }, TIME_BETWEEN_STEPS);
}

function orderTacos (payForTacosCallback) {
  console.log('Ordering tacos.');
  setTimeout(() => {
    console.log(`Taco order is in! Money please.`);
    payForTacosCallback();
  }, TIME_BETWEEN_STEPS);
}

function pay (paymentCompleteCallback) {
  console.log(`Paying for the tacos.`);
  setTimeout(() => {
    console.log(`Payment complete. Order number is ${getNextOrderNumber()}.`);
    paymentCompleteCallback();
  }, TIME_BETWEEN_STEPS);
}

function waitForTacos (tacosCallback) {
  console.log(`Waiting for tacos to be done.`);
  setTimeout(() => {
    console.log('Tacos are done!');
    tacosCallback(null, '🌮🌮🌮');
  }, TIME_FOR_TACOS);
}
