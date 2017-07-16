const { TIME_BETWEEN_STEPS, TIME_FOR_TACOS, getNextOrderNumber, wait } = require('../util');

module.exports = { hailRide, waitInLine, orderTacos, pay, waitForTacos };

function hailRide () {
  console.log('Hailing a ride.');
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log('Ride has arrived.'))
    .then(() => rideTo);
}

function rideTo (location) {
  console.log(`Going to ${location}.`);
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log(`Made it to ${location}.`));
}

function waitInLine () {
  console.log('Waiting in line.');
  return wait(TIME_BETWEEN_STEPS)
    .then(() => console.log('Finally at the counter, ready to order.'));
}

function orderTacos () {
  console.log('Ordering tacos.');
  return wait(TIME_BETWEEN_STEPS).then(() => {
    let tacoCost = 7;
    console.log(`Taco order is in! They cost $${tacoCost}.`);
    return tacoCost;
  });
}

function pay (amount) {
  console.log(`Paying $${amount} for the tacos.`);
  return wait(TIME_BETWEEN_STEPS).then(() => {
    let orderNumber = getNextOrderNumber();
    console.log(`Payment complete. Order number is ${orderNumber}.`);
    return orderNumber;
  });
}

function waitForTacos (orderNumber) {
  console.log(`Waiting for order #${orderNumber} to be done.`);
  return wait(TIME_FOR_TACOS)
    .then(() => console.log('Tacos are done!'))
    .then(() => '🌮🌮🌮');
}
