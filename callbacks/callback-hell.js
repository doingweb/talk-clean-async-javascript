let { hailRide, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Going through callback hell for some tacos.');

goOutForTacos();

function goOutForTacos () {
  hailRide((err, rideTo) => {
    if (err) { giveUp(err); return; }
    rideTo('the taco place', err => {
      if (err) { giveUp(err); return; }
      waitInLine(err => {
        if (err) { giveUp(err); return; }
        orderTacos((err, costOfTacos) => {
          if (err) { giveUp(err); return; }
          pay(costOfTacos, (err, orderNumber) => {
            if (err) { giveUp(err); return; }
            waitForTacos(orderNumber, (err, tacos) => {
              if (err) { giveUp(err); return; }
              console.log(`😋🍴 ${tacos}.`)
            });
          });
        });
      });
    });
  });
}
