let { hailRide, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with async/await.');

goOutForTacos();

async function goOutForTacos () {
  try {
    let rideTo = await hailRide();
    await rideTo('the taco place');
    await waitInLine();
    let tacoCost = await orderTacos();
    let orderNumber = await pay(tacoCost);
    let tacos = await waitForTacos(orderNumber);
    console.log(`😋🍴 ${tacos}.`);
  } catch (error) {
    giveUp(error);
  }
}
