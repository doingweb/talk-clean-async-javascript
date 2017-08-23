const { TIME_BETWEEN_STEPS, TIME_FOR_TACOS, getNextOrderNumber, wait } = require('../util');

module.exports = { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos };

async function hailRide () {
  console.log('Hailing a ride.');
  await wait(TIME_BETWEEN_STEPS);
  console.log('Ride has arrived.');
}

async function driveToTacoPlace () {
  console.log(`Going to taco place.`);
  await wait(TIME_BETWEEN_STEPS);
  console.log(`Made it to taco place.`);
}

async function waitInLine () {
  console.log('Waiting in line.');
  await wait(TIME_BETWEEN_STEPS);
  console.log('Finally at the counter, ready to order.');
}

async function orderTacos () {
  console.log('Ordering tacos.');
  await wait(TIME_BETWEEN_STEPS);
  console.log(`Taco order is in! Money please.`);
}

async function pay () {
  console.log(`Paying for the tacos.`);
  await wait(TIME_BETWEEN_STEPS);
  console.log(`Payment complete. Order number is ${getNextOrderNumber()}.`);
}

async function waitForTacos () {
  console.log(`Waiting for tacos to be done.`);
  await wait(TIME_FOR_TACOS);
  console.log('Tacos are done!');

  return '🌮🌮🌮';
}
