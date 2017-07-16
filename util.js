const TIME_BETWEEN_STEPS = 1000,
  TIME_FOR_TACOS = 7000;

module.exports = { TIME_BETWEEN_STEPS, TIME_FOR_TACOS, giveUp, getNextOrderNumber, wait };

function giveUp (reason) {
  console.log(`${reason} Looks like I\'m not having tacos today ☹`);
}

function getNextOrderNumber () {
  return Math.ceil(Math.random() * 10);
}

function wait (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
