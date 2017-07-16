const { TIME_BETWEEN_STEPS, TIME_FOR_TACOS, getNextOrderNumber, wait } = require('../util');

module.exports = { hailRide, waitInLine, orderTacos, pay, waitForTacos };

async function hailRide () {
  console.log('Hailing a ride.');
  await wait(TIME_BETWEEN_STEPS);
  console.log('Ride has arrived.');

  return rideTo;
}

async function rideTo (location) {
  console.log(`Going to ${location}.`);
  await wait(TIME_BETWEEN_STEPS);
  console.log(`Made it to ${location}.`);
}

async function waitInLine () {
  console.log('Waiting in line.');
  await wait(TIME_BETWEEN_STEPS);
  console.log('Finally at the counter, ready to order.');
}

async function orderTacos () {
  console.log('Ordering tacos.');
  await wait(TIME_BETWEEN_STEPS);

  let tacoCost = 7;
  console.log(`Taco order is in! They cost $${tacoCost}.`);
  return tacoCost;
}

async function pay (amount) {
  console.log(`Paying $${amount} for the tacos.`);
  await wait(TIME_BETWEEN_STEPS);

  let orderNumber = getNextOrderNumber();
  console.log(`Payment complete. Order number is ${orderNumber}.`);
  return orderNumber;
}

async function waitForTacos (orderNumber) {
  console.log(`Waiting for order #${orderNumber} to be done.`);
  await wait(TIME_FOR_TACOS);
  console.log('Tacos are done!');

  return '🌮🌮🌮';
}
