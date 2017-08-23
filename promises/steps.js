const { TIME_BETWEEN_STEPS, TIME_FOR_TACOS, getNextOrderNumber, wait } = require('../util');

module.exports = { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos };

function hailRide () {
  console.log('Hailing a ride.');
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log('Ride has arrived.'));
}

function driveToTacoPlace () {
  console.log(`Going to taco place.`);
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log(`Made it to taco place.`));
}

function waitInLine () {
  console.log('Waiting in line.');
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log('Finally at the counter, ready to order.'));
}

function orderTacos () {
  console.log('Ordering tacos.');
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log(`Taco order is in! Money please.`));
}

function pay (amount) {
  console.log(`Paying for the tacos.`);
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log(`Payment complete. Order number is ${getNextOrderNumber()}.`));
}

function waitForTacos (orderNumber) {
  console.log(`Waiting for tacos to be done.`);
  return wait(TIME_FOR_TACOS)
    .then(() => console.log('Tacos are done!'))
    .then(() => '🌮🌮🌮');
}
