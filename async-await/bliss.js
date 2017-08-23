let { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Getting tacos with async/await.');

goOutForTacos();

async function goOutForTacos () {
  try {
    await hailRide();
    await driveToTacoPlace();
    await waitInLine();
    await orderTacos();
    await pay();
    let tacos = await waitForTacos();
    console.log(`😋🍴 ${tacos}.`);
  } catch (error) {
    giveUp(error);
  }
}
