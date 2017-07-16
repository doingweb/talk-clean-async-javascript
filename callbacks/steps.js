const { TIME_BETWEEN_STEPS, TIME_FOR_TACOS, giveUp, getNextOrderNumber } = require('../util');

module.exports = { hailRide, waitInLine, orderTacos, pay, waitForTacos };

function hailRide (rideArrivedCallback) {
  console.log('Hailing a ride.');

  setTimeout(() => {
    console.log('Ride has arrived');
    rideArrivedCallback(null, rideTo);
  }, TIME_BETWEEN_STEPS);
}

function rideTo (location, rideCompleteCallback) {
  console.log(`Going to ${location}.`);
  setTimeout(() => {
    console.log(`Made it to ${location}.`);
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
    let tacoCost = 7;
    console.log(`Taco order is in! They cost $${tacoCost}.`);
    payForTacosCallback(null, tacoCost);
  }, TIME_BETWEEN_STEPS);
}

function pay (amount, paymentCompleteCallback) {
  console.log(`Paying $${amount} for the tacos.`);
  setTimeout(() => {
    let orderNumber = getNextOrderNumber();
    console.log(`Payment complete. Order number is ${orderNumber}.`);
    paymentCompleteCallback(null, orderNumber);
  }, TIME_BETWEEN_STEPS);
}

function waitForTacos (orderNumber, tacosCallback) {
  console.log(`Waiting for order #${orderNumber} to be done.`);
  setTimeout(() => {
    console.log('Tacos are done!');
    tacosCallback(null, '🌮🌮🌮');
  }, TIME_FOR_TACOS);
}
